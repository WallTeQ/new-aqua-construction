"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Coastal Bridge Reinforcement",
    category: "Civil Engineering",
    before: "https://images.unsplash.com/photo-1545139224-7968bc565985?q=80&w=800",
    after: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
  },
  {
    title: "Urban Commercial Tower",
    category: "Building Construction",
    before: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
    after: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
  {
    title: "Industrial Steel Framework",
    category: "Structural Works",
    before: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=800",
    after: "https://images.unsplash.com/photo-1504307651254-35682f94a1d8?q=80&w=800",
  },
  {
    title: "Heritage Office Retrofit",
    category: "Renovation",
    before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
]

const categories = ["All", "Civil Engineering", "Building Construction", "Structural Works", "Renovation"]

export function Gallery() {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        
        {/* Header with Technical Accent */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-5xl font-black text-white uppercase tracking-tighter italic leading-none">
              Project <span className="text-blue-600">Archive</span>
            </h2>
            <div className="h-1 w-20 bg-blue-600 mt-4" />
          </div>
          
          {/* Professional Category Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 text-[10px] font-bold uppercase tracking-widest transition-all border ${
                  filter === cat 
                    ? "bg-white text-black border-white" 
                    : "border-white/10 text-white/40 hover:border-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dual-Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                key={project.title}
                className="group"
              >
                {/* Image Pair Container */}
                <div className="grid grid-cols-2 gap-3 mb-6 relative">
                  {/* Before Box */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm">
                    <div className="absolute top-4 left-4 z-20 bg-black/80 px-2 py-1 border border-white/20">
                      <span className="text-[9px] font-black text-white uppercase tracking-widest">Initial</span>
                    </div>
                    <Image 
                      src={project.before} 
                      alt="Before" 
                      fill 
                      className="object-cover opacity-50 grayscale group-hover:opacity-70 transition-all duration-700" 
                    />
                  </div>

                  {/* After Box */}
                  <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 rounded-sm border-l-2 border-blue-600">
                    <div className="absolute top-4 left-4 z-20 bg-blue-600 px-2 py-1">
                      <span className="text-[9px] font-black text-white uppercase tracking-widest">Final</span>
                    </div>
                    <Image 
                      src={project.after} 
                      alt="After" 
                      fill 
                      className="object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>

                {/* Technical Labeling */}
                <div className="flex justify-between items-start border-t border-white/10 pt-4">
                  <div>
                    <span className="text-blue-500 text-[10px] font-black uppercase tracking-[0.2em]">
                      {project.category}
                    </span>
                    <h3 className="text-white text-2xl font-bold uppercase tracking-tight mt-1">
                      {project.title}
                    </h3>
                  </div>
                  <div className="h-10 w-10 border border-white/10 flex items-center justify-center text-white/20 group-hover:text-blue-500 group-hover:border-blue-500 transition-all">
                    →
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}