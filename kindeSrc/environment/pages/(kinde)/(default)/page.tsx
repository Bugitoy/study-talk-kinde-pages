import React from 'react';

interface PageProps {
  event: {
    context: {
      domains: {
        kindeDomain: string;
      };
      widget: {
        content: {
          pageTitle: string;
          heading: string;
          description: string;
          logoAlt: string;
        };
      };
    };
    request: {
      authUrlParams: {
        orgCode?: string;
        state?: string;
        clientId?: string;
        redirectUri?: string;
      };
      locale: {
        isRtl: boolean;
        lang: string;
      };
      route: {
        context: string;
        flow: string;
        path: string;
      };
    };
  };
}

export default function Page({ event }: PageProps) {
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

  const handleGoogleAuth = () => {
    // This will be replaced by Kinde's template engine
    window.location.href = '{{kinde.auth.google}}';
  };

  return (
    <html lang={lang}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{content.pageTitle || 'Study-Talk - Sign In'}</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Alata&display=swap" rel="stylesheet" />
        <script>
          {`
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    'alata': ['Alata', 'sans-serif'],
                  }
                }
              }
            }
          `}
        </script>
      </head>
      <body 
        className="min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: "linear-gradient(to bottom right, #FFECD2, #DCEAF7, #FFDECA)",
          fontFamily: "Alata, sans-serif"
        }}
      >
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Auth Form */}
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start mb-6">
                  <div className="w-12 h-12 bg-orange-200 rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-2xl font-bold text-gray-900">
                    Study-Talk
                  </span>
                </div>
                
                <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  Join the Study Revolution
                </div>
                
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                  {isLogin ? 'Welcome Back' : 'Join Study-Talk'}
                </h1>
                
                <p className="text-lg text-gray-600 mb-8">
                  {isLogin 
                    ? 'Sign in to continue your learning journey with Study-Talk'
                    : 'Start your learning journey with Study-Talk today'
                  }
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg border-0">
                <div className="p-8">
                  <div className="text-center pb-6">
                    <h2 className="text-2xl font-bold text-gray-900">
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </h2>
                    <p className="text-gray-600 mt-2">
                      {isLogin 
                        ? 'Choose your preferred sign-in method'
                        : 'Choose your preferred sign-up method'
                      }
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    {/* Google OAuth Button */}
                    <button 
                      className="w-full bg-orange-200 hover:bg-orange-300 text-gray-900 py-6 text-lg font-medium rounded-lg transition-colors duration-200 flex items-center justify-center"
                      onClick={handleGoogleAuth}
                    >
                      <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Continue with Google
                    </button>
                    
                    <div className="relative">
                      <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300" />
                      </div>
                      <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-white text-gray-500">Or continue with email</span>
                      </div>
                    </div>
                    
                    {/* Email/Password Form */}
                    <form className="space-y-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                          Password
                        </label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          placeholder="Enter your password"
                          required
                        />
                      </div>
                      
                      <button
                        type="submit"
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                      >
                        {isLogin ? 'Sign In' : 'Create Account'}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Side - Features (Desktop Only) */}
            <div className="hidden lg:block">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Why Choose Study-Talk?
                  </h3>
                  <p className="text-gray-600 mb-8">
                    Join thousands of students who are already learning smarter
                  </p>
                </div>
                
                <div className="grid grid-cols-1 gap-6">
                  {/* Feature 1 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Study Groups</h4>
                        <p className="text-gray-600">Join or create study groups with students from around the world</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature 2 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Quiz Competitions</h4>
                        <p className="text-gray-600">Test your knowledge in real-time competitions with other students</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Feature 3 */}
                  <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Anonymous Confessions</h4>
                        <p className="text-gray-600">Share your study struggles and get support from the community</p>
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
  );
}

export const pageSettings = {
  bindings: {
    "kinde.auth.google": "{{kinde.auth.google}}"
  }
}; 