"use client";

import React, { useState } from 'react';

export default function Home() {
  const expoUrl = "https://expo.dev/accounts/hall-e3/projects/TravelAventures/builds/26b2048b-2afe-4ef6-8180-b374b85dc43b";
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(expoUrl)}`;

  return (
    <div className="min-h-screen bg-[#F0F7F5] font-sans text-[#000000] overflow-x-hidden">
      {/* Header */}
      <nav className="flex items-center justify-between px-4 sm:px-8 py-4 sm:py-6 bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-100/50">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#2F8A77] rounded-lg flex items-center justify-center shrink-0 overflow-hidden">
            <img src="/favicon.png" alt="TravelAventures" className="w-full h-full object-contain scale-75" />
          </div>
          <span className="text-lg sm:text-xl font-bold tracking-tight text-[#2F8A77] whitespace-nowrap">TravelAventures</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-8 text-xs sm:text-sm font-medium text-gray-600">
          <a href="#scan" className="hidden sm:block hover:text-[#2F8A77] transition-colors">How to scan</a>
          <button className="bg-[#2F8A77] text-white px-4 sm:px-5 py-2 rounded-full hover:shadow-lg hover:shadow-[#2F8A77]/20 transition-all active:scale-95">
            Internal Portal
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="px-4 sm:px-8 pt-12 sm:pt-20 pb-12 text-center max-w-4xl mx-auto">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-[#2F8A77]/10 text-[#2F8A77] text-[10px] sm:text-xs font-bold tracking-wider uppercase">
            Official Internal Release
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] mb-6 sm:mb-8 tracking-tight px-2 text-balance">
            The <span className="text-[#2F8A77]">TravelAventures</span> Preview.
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
            Welcome to the official testing portal. Scan the QR code below to install the latest **Android Preview Build** directly on your device.
          </p>
        </section>

        {/* Static Scan Section */}
        <section id="scan" className="px-4 sm:px-8 py-12 sm:py-16 bg-white border-y border-gray-100">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            <div className="order-2 lg:order-1 px-2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center lg:text-left">Android Preview Release</h2>
              
              <div className="bg-[#2F8A77]/5 p-6 rounded-2xl mb-8 border border-[#2F8A77]/10">
                <p className="text-[#2F8A77] text-sm font-semibold mb-2">Build Type: <span className="text-black ml-2 font-mono text-xs">Internal Preview (APK)</span></p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Scanning this code will take you to the official Expo build page. Tap the "Install" button on that page to download the TravelAventures app to your Android device.
                </p>
              </div>

              <div className="space-y-6 max-w-md mx-auto lg:mx-0">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F2B818]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#F2B818] font-bold italic">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">Get the Link</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Run your dev server and paste the tunnel URL into the input above.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#F2B818]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#F2B818] font-bold italic">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-1 text-sm sm:text-base">Scan with Expo Go</h3>
                    <p className="text-gray-500 text-xs sm:text-sm">Scan the generated QR code on the right using your phone's camera or Expo Go.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col items-center">
              <div className="p-8 bg-white rounded-[2.5rem] shadow-2xl shadow-[#2F8A77]/10 border border-gray-50 relative w-full max-w-[360px]">
                <div className="absolute inset-0 bg-gradient-to-br from-[#2F8A77]/5 to-transparent rounded-[2.5rem] -z-10" />
                
                {/* QR Code Container */}
                <div className="aspect-square w-full bg-white rounded-2xl flex flex-col items-center justify-center border-4 border-[#2F8A77]/10 shadow-inner overflow-hidden relative p-4 group">
                  {expoUrl ? (
                    <img 
                      src={qrUrl} 
                      alt="Expo QR Code" 
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  ) : (
                    <div className="text-center p-8">
                      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#2F8A77" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="opacity-20 mx-auto mb-4">
                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        <path d="M9 12l2 2 4-4"/>
                      </svg>
                      <p className="text-xs font-bold text-gray-300">Enter a URL to generate QR</p>
                    </div>
                  )}
                  
                  <div className="absolute bottom-0 inset-x-0 py-3 bg-[#2F8A77]/90 backdrop-blur-sm flex items-center justify-center gap-2 transform translate-y-full group-hover:translate-y-0 transition-transform">
                     <span className="text-[10px] font-bold text-white uppercase tracking-tighter">Verified Dev Build</span>
                  </div>
                </div>
                
                <div className="mt-6 flex items-center justify-between px-2">
                  <div className="flex flex-col">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Device Support</p>
                    <p className="text-xs font-bold text-gray-900">iOS & Android ✅</p>
                  </div>
                  <div className="h-8 w-px bg-gray-100" />
                  <div className="flex flex-col text-right">
                    <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider">Version</p>
                    <p className="text-xs font-bold text-[#F2B818]">Internal Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pro Tips Section */}
        <section className="px-4 sm:px-8 py-24 max-w-6xl mx-auto border-t border-gray-50">
           <div className="grid md:grid-cols-2 gap-12 items-center bg-[#2F8A77] rounded-[3rem] p-8 sm:p-16 text-white shadow-xl">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">Pro Workflow: <br/>Tunnel vs. Publish</h2>
                <div className="space-y-4 text-white/80 text-sm sm:text-base">
                  <p>🚀 <strong className="text-white">Tunnel Mode:</strong> Best for rapid iteration. Use <code className="bg-white/10 px-2 py-1 rounded text-white font-mono">--tunnel</code> to share live updates across networks instantly.</p>
                  <p>📦 <strong className="text-white">Publishing:</strong> Best for permanent shareable links. This hosts your JS bundle on Expo's servers so your laptop doesn't need to stay on.</p>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <h3 className="text-xl font-bold mb-4">Sharing Check-list</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex gap-3">✅ <span>Ensure "travelaventures" scheme is in app.json</span></li>
                  <li className="flex gap-3">✅ <span>Download Expo Go app on test devices</span></li>
                  <li className="flex gap-3">✅ <span>Check local firewall if tunnel fails</span></li>
                  <li className="flex gap-3">✅ <span>Share this Netlify portal with your team</span></li>
                </ul>
              </div>
           </div>
        </section>
      </main>

      <footer className="px-4 sm:px-8 py-12 text-center">
        <p className="text-gray-400 text-[10px] sm:text-xs tracking-widest uppercase font-bold mb-4">TravelAventures Internal Pipeline</p>
        <p className="text-gray-500 text-xs sm:text-sm">&copy; 2026 Developer Portal. All rights reserved.</p>
      </footer>
    </div>
  );
}
