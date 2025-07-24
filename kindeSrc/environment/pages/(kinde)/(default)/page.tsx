export default function Page({ event }: any) {
  // Safely extract values with fallbacks
  const context = event?.context || {};
  const request = event?.request || {};
  const widget = context?.widget || {};
  const content = widget?.content || {};
  const route = request?.route || {};
  const locale = request?.locale || {};
  
  const flow = route?.flow || 'login';
  const lang = locale?.lang || 'en';
  
  const isLogin = flow === 'login';
  const isRegister = flow === 'register';

  return `
    <!DOCTYPE html>
    <html lang="${lang}">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${content.pageTitle || 'Study-Talk - Sign In'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" />
        <script>
          tailwind.config = {
            theme: {
              extend: {
                fontFamily: {
                  'alata': ['Alata', 'sans-serif'],
                }
              }
            }
          }
        </script>
      </head>
      <body 
        class="min-h-screen flex items-center justify-center"
        style="background-image: linear-gradient(to bottom right, #FFECD2, #DCEAF7, #FFDECA); font-family: Alata, sans-serif;"
      >
        <div class="max-w-6xl mx-auto px-4 py-8">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <!-- Left Side - Auth Form -->
            <div class="space-y-8">
              <div class="text-center lg:text-left">
                <div class="flex items-center justify-center lg:justify-start mb-6">
                  <div class="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mr-3">
                    <svg class="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span class="text-2xl font-bold text-gray-900">
                    Study-Talk
                  </span>
                </div>
                
                <div class="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                  <svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clip-rule="evenodd" />
                  </svg>
                  Join the Study Revolution
                </div>
                
                <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  ${isLogin ? 'Welcome Back' : 'Join Study-Talk'}
                </h1>
                
                <p class="text-lg text-gray-600 mb-8">
                  ${isLogin 
                    ? 'Sign in to continue your learning journey with Study-Talk'
                    : 'Start your learning journey with Study-Talk today'
                  }
                </p>
              </div>

              <div class="bg-white rounded-2xl shadow-lg border-0">
                <div class="p-8">
                  <div class="text-center pb-6">
                    <h2 class="text-2xl font-bold text-gray-900">
                      ${isLogin ? 'Sign In' : 'Create Account'}
                    </h2>
                    <p class="text-gray-600 mt-2">
                      ${isLogin 
                        ? 'Choose your preferred sign-in method'
                        : 'Choose your preferred sign-up method'
                      }
                    </p>
                  </div>
                  
                  <div class="space-y-4">
                    <!-- Google OAuth Button -->
                    <a 
                      href="{{kinde.auth.google}}"
                      class="w-full bg-orange-200 hover:bg-orange-300 text-gray-900 py-6 text-lg font-medium rounded-lg transition-colors duration-200 flex items-center justify-center no-underline"
                    >
                      <svg class="w-6 h-6 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </a>
                    
                    <div class="relative">
                      <div class="absolute inset-0 flex items-center">
                        <div class="w-full border-t border-gray-300"></div>
                      </div>
                      <div class="relative flex justify-center text-sm">
                        <span class="px-2 bg-white text-gray-500">Or continue with email</span>
                      </div>
                    </div>
                    
                    <!-- Email/Password Form -->
                    <form method="post" class="space-y-4">
                      <div>
                        <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        class="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        ${isLogin ? 'Sign In' : 'Create Account'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Right Side - Features (Desktop Only) -->
            <div class="hidden lg:block">
              <div class="space-y-6">
                <div class="text-center">
                  <h3 class="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose Study-Talk?
                  </h3>
                  <p class="text-gray-600 mb-8">
                    Join thousands of students who are already learning smarter
                  </p>
                </div>
                
                <div class="grid grid-cols-1 gap-6">
                  <!-- Feature 1 -->
                  <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Study Groups</h4>
                        <p class="text-gray-600">Join or create study groups with students from around the world</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Feature 2 -->
                  <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Quiz Competitions</h4>
                        <p class="text-gray-600">Test your knowledge in real-time competitions with other students</p>
                      </div>
                    </div>
                  </div>
                  
                  <!-- Feature 3 -->
                  <div class="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div class="flex items-start space-x-4">
                      <div class="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg class="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 class="text-lg font-semibold text-gray-900 mb-2">Anonymous Confessions</h4>
                        <p class="text-gray-600">Share your study struggles and get support from the community</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export const pageSettings = {
  bindings: {
    "kinde.auth.google": "{{kinde.auth.google}}"
  }
}; 