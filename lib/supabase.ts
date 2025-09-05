import { createClient } from '@supabase/supabase-js'
import { createClientComponentClient, createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

export const createSupabaseClient = () => {
  return createClient(supabaseUrl, supabaseAnonKey)
}

export const createSupabaseServerClient = () => {
  const cookieStore = cookies()
  return createServerComponentClient({ cookies: () => cookieStore })
}

export const createSupabaseAdminClient = () => {
  return createClient(supabaseUrl, supabaseServiceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}

export const supabase = createSupabaseClient()

export class SupabaseImageService {
  static async uploadGeneratedImage(imageUrl: string, filename: string): Promise<string> {
    const supabaseAdmin = createSupabaseAdminClient()
    
    try {
      const response = await fetch(imageUrl)
      if (!response.ok) {
        throw new Error('Failed to fetch generated image')
      }
      
      const imageBuffer = await response.arrayBuffer()
      // Ensure filename has .jpg extension for the policy
      const jpgFilename = filename.endsWith('.jpg') ? filename : filename.replace(/\.[^/.]+$/, '') + '.jpg'
      const file = new File([imageBuffer], jpgFilename, { type: 'image/jpeg' })
      
      // Upload to public folder to match the storage policy
      const { data, error } = await supabaseAdmin.storage
        .from('linkedin-images')
        .upload(`public/${jpgFilename}`, file, {
          cacheControl: '3600',
          upsert: false
        })
      
      if (error) {
        throw error
      }
      
      // Get public URL - this will work with anonymous access
      const { data: { publicUrl } } = supabaseAdmin.storage
        .from('linkedin-images')
        .getPublicUrl(data.path)
      
      return publicUrl
    } catch (error) {
      console.error('Error uploading image to Supabase:', error)
      throw new Error('Failed to upload image to storage')
    }
  }
}
