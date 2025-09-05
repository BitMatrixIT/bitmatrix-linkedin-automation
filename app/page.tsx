import Link from 'next/link'
import { ArrowRight, Zap, Shield, Clock } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
            Automate Your{' '}
            <span className="relative whitespace-nowrap text-blue-600">
              LinkedIn Content
            </span>{' '}
            for Dental IT
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-slate-700">
            BitMatrix LinkedIn Automation discovers trending dental technology content, 
            rewrites it with AI, and publishes it automatically - saving you hours every week.
          </p>
          <div className="mt-10 flex justify-center gap-x-6">
            <Link 
              href="/auth/signin"
              className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none bg-slate-900 text-white hover:bg-slate-700 active:bg-slate-800 focus:ring-2 focus:ring-slate-900"
            >
              Get Started
              <ArrowRight className="ml-3 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/dashboard"
              className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-slate-900 hover:ring-slate-300 active:bg-slate-100 active:text-slate-600"
            >
              View Dashboard
            </Link>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Everything you need for LinkedIn success
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Streamline your LinkedIn content strategy with AI-powered automation
            </p>
          </div>

          <div className="mt-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">AI-Powered Content</h3>
                <p className="mt-2 text-base text-gray-500">
                  Our AI discovers trending dental technology articles and rewrites them into engaging LinkedIn posts
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500 text-white mx-auto">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Approval Workflow</h3>
                <p className="mt-2 text-base text-gray-500">
                  Every post goes through Microsoft Teams for approval before publishing to maintain quality
                </p>
              </div>

              <div className="text-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white mx-auto">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Smart Scheduling</h3>
                <p className="mt-2 text-base text-gray-500">
                  Automatically schedule 2-3 posts per week at optimal times for maximum engagement
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
