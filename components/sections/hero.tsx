import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/background.PNG" // The path to your image in the public folder
          alt="NACOC Construction Site"
          fill
          priority
          className="object-cover object-center"
        />
        {/* 2. Dark Overlay - Important so text remains readable */}
        <div className="absolute inset-0 bg-black/60 shadow-inset" />
      </div>

      {/* 3. Hero Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Building Liberia's <span className="text-primary">Future</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
            New Aqualia Construction Company delivers technically compliant, 
            safe, and durable infrastructure solutions.
          </p>
          <div className="flex gap-4">
             {/* Your Buttons */}
          </div>
        </div>
      </div>
    </section>
  )
}