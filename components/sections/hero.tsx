import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/site.png" 
          alt="NACOC Construction Site"
          fill
          priority
          className="object-cover object-center"
        />
        {/* 2. Dark Overlay */}
        <div className="absolute inset-0 bg-black/60 shadow-inset" />
      </div>

      {/* 3. Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Crafting Infrastructure. <br />
            <span className="text-blue-500 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              Delivering Excellence.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            New Aqualia Construction Company delivers technically compliant, 
            safe, and durable infrastructure solutions across Liberia.
          </p>
          
          {/* 4. Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/experience" 
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-md transition-all hover:bg-blue-700 text-center overflow-hidden"
            >
              <span className="relative z-10">Explore Our Work</span>
              {/* Subtle hover shine effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
            </Link>

            <Link 
              href="/about" 
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-md hover:bg-white/20 transition-all text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}