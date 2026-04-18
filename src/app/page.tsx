import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F7F5] font-sans text-[#000000]">
      {/* Header */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2F8A77] rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M17.8 19.2L16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-1.2-.3-2.4.3-3 1.3-.6 1-1.3 3.3 1.2 4.5l8 2 2 8c1.2 2.5 3.5 1.8 4.5 1.2 1-.6 1.6-1.8 1.3-3z"/>
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#2F8A77]">TravelAventures</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#scan" className="hover:text-[#2F8A77] transition-colors">How to scan</a>
          <a href="#features" className="hover:text-[#2F8A77] transition-colors">Features</a>
          <button className="bg-[#2F8A77] text-white px-5 py-2 rounded-full hover:shadow-lg hover:shadow-[#2F8A77]/20 transition-all">
            Get App
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="px-8 pt-20 pb-12 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#2F8A77]/10 text-[#2F8A77] text-xs font-bold tracking-wider uppercase">
            Internal Preview Available
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight">
            Explore the World with <span className="text-[#2F8A77]">Confidence.</span>
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Welcome to the TravelAventures developer portal. Scan the build below to experience our high-end travel itineraries and premium design directly on your phone.
          </p>
        </section>

        {/* QR Code Section */}
        <section id="scan" className="px-8 py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6">Ready to Test?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F2B818]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#F2B818] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Install Expo Go</h3>
                    <p className="text-gray-500 text-sm">Download the Expo Go app from the App Store or Google Play Store.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F2B818]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#F2B818] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Scan QR Code</h3>
                    <p className="text-gray-500 text-sm">Open your camera (iOS) or the Expo Go app (Android) and scan the code on the right.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#F2B818]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#F2B818] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Explore App</h3>
                    <p className="text-gray-500 text-sm">The build will load instantly. Experience the smooth animations and rich layouts.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2 flex flex-col items-center">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-2xl shadow-[#2F8A77]/10 border border-gray-50 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F8A77]/5 to-transparent rounded-[2.5rem] -z-10" />
                
                {/* QR Code Placeholder */}
                <div className="w-64 h-64 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-gray-200 group-hover:border-[#2F8A77]/30 transition-colors overflow-hidden">
                  <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="#2F8A77" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 mb-4">
                    <rect x="3" y="3" width="7" height="7"/>
                    <rect x="14" y="3" width="7" height="7"/>
                    <rect x="14" y="14" width="7" height="7"/>
                    <rect x="3" y="14" width="7" height="7"/>
                    <path d="M7 7h.01M17 7h.01M17 17h.01M7 17h.01"/>
                  </svg>
                  <p className="text-xs font-medium text-[#2F8A77] bg-[#2F8A77]/10 px-3 py-1 rounded-full">Scan with Expo Go</p>
                  
                  {/* Note: In a real deployment, you'd insert the actual QR component here */}
                  <div className="absolute inset-0 flex items-center justify-center bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-sm font-bold text-[#2F8A77]">Deploy to see QR</p>
                  </div>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm font-bold text-gray-900">Current Build: v1.0.4</p>
                  <p className="text-xs text-gray-400">Last updated: Just now</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-8 py-24 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Built for Premium Experiences</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Discover the features that make TravelAventures stand out from the crowd.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-[#2F8A77]/5 transition-all">
              <div className="w-12 h-12 bg-[#2F8A77]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F8A77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Travels</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Integrated safety features and real-time alerts for every itinerary.</p>
            </div>
            
            <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-[#2F8A77]/5 transition-all">
              <div className="w-12 h-12 bg-[#F2B818]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F2B818" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Instant Booking</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Book your dream cabana or tour in seconds with our optimized flow.</p>
            </div>
            
            <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl hover:shadow-[#2F8A77]/5 transition-all">
              <div className="w-12 h-12 bg-[#2F8A77]/10 rounded-2xl flex items-center justify-center mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2F8A77" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Rich Metadata</h3>
              <p className="text-gray-500 text-sm leading-relaxed">Detailed descriptions, high-res photos, and verified customer reviews.</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-100 text-center">
        <p className="text-gray-400 text-xs tracking-widest uppercase font-bold mb-4">Internal Developer Preview</p>
        <p className="text-gray-500 text-sm">&copy; 2026 TravelAventures. All rights reserved.</p>
      </footer>
    </div>
  );
}
