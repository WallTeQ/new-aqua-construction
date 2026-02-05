import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react" // Modern icons

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/New Bg.jpg" 
          alt="NACOC Construction Site"
          fill
          priority
          className="object-cover object-center scale-105 animate-slow-zoom" // Added slow zoom effect
        />
        {/* 2. Layered Overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/20 z-10" />
      </div>

      {/* 3. Hero Content */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-400">
              Liberia's Infrastructure Leaders
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-[0.95] md:leading-[0.9] uppercase">
  Constructing <br />
  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
    The Future.
  </span>
</h1>
          

          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl font-light leading-relaxed">
            From complex civil engineering to sustainable urban development, 
            <span className="text-white font-medium"> NACC </span> delivers technically 
            superior infrastructure built for the next century.
          </p>
          
          {/* 4. Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 items-center">
            <Link 
              href="/experience" 
              className="group flex items-center gap-2 px-10 py-5 bg-blue-600 text-white font-extrabold rounded-sm transition-all hover:bg-blue-700 text-center uppercase tracking-wider"
            >
              Start Your Project
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>

            <Link 
              href="/about" 
              className="px-10 py-5 bg-transparent border-b-2 border-white/30 hover:border-white text-white font-bold transition-all text-center tracking-wider"
            >
              Our Engineering Standards
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden md:block">
        <ChevronDown className="text-white/50" size={32} />
      </div>
    </section>
  )
}