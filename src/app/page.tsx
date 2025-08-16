"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 hover:shadow-3xl">
          <CardHeader className="text-center space-y-4 pb-8">
            <CardTitle className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent animate-pulse">
              Hello World
            </CardTitle>
            <CardDescription className="text-xl text-gray-600 max-w-md mx-auto">
              Welcome to our beautiful Next.js application with modern design and elegant styling
            </CardDescription>
          </CardHeader>
          
          <CardContent className="text-center space-y-6">
            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed">
                This is a modern Hello World application built with:
              </p>
              
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-lg p-3 hover:from-blue-200 hover:to-blue-300 transition-colors">
                  <p className="font-semibold text-blue-800">Next.js 15</p>
                  <p className="text-sm text-blue-600">React Framework</p>
                </div>
                
                <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-lg p-3 hover:from-purple-200 hover:to-purple-300 transition-colors">
                  <p className="font-semibold text-purple-800">Tailwind CSS</p>
                  <p className="text-sm text-purple-600">Styling</p>
                </div>
                
                <div className="bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-lg p-3 hover:from-indigo-200 hover:to-indigo-300 transition-colors">
                  <p className="font-semibold text-indigo-800">shadcn/ui</p>
                  <p className="text-sm text-indigo-600">Components</p>
                </div>
                
                <div className="bg-gradient-to-r from-green-100 to-green-200 rounded-lg p-3 hover:from-green-200 hover:to-green-300 transition-colors">
                  <p className="font-semibold text-green-800">TypeScript</p>
                  <p className="text-sm text-green-600">Type Safety</p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce">
                <span className="text-2xl">🚀</span>
              </div>
              <p className="mt-4 text-gray-600 italic">
                Ready to build amazing applications!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}