"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Luxury Estate Renovation",
    category: "Residential",
    before: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=800",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800",
  },
  {
    title: "Commercial Foundation",
    category: "Commercial",
    before: "https://images.unsplash.com/photo-1541913057-7147d9e1bb68?q=80&w=800",
    after: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=800",
  },
  {
    title: "Structural Framework",
    category: "Industrial",
    before: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=800",
    after: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
]

const categories = ["All", "Residential", "Commercial", "Industrial"]

export function Gallery() {
  const [filter, setFilter] = useState("All")

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="gallery" className="py-24 bg-black border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
            PROJECT <span className="text-blue-500">PORTFOLIO</span>
          </h2>
          <div className="h-1 w-24 bg-blue-600 mt-2"></div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 text-[10px] font-bold uppercase tracking-[0.2em] transition-all border ${
                filter === cat 
                  ? "bg-blue-600 border-blue-600 text-white" 
                  : "border-white/10 text-white/50 hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filtered.map((project) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={project.title}
                    className="group relative bg-[#0A0A0A] p-4 border border-white/5"
                  >
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="relative h-48 bg-neutral-900 overflow-hidden">
                        <span className="absolute top-2 left-2 z-10 bg-black/80 text-[8px] text-white px-2 py-0.5 font-bold tracking-widest uppercase">Before</span>
                        <Image 
                          src={project.before} 
                          alt="Initial State" 
                          fill 
                          className="object-cover opacity-60 grayscale group-hover:grayscale-0 transition-all duration-500" 
                        />
                      </div>
                      <div className="relative h-48 bg-neutral-900 overflow-hidden border-l border-blue-600/50">
                        <span className="absolute top-2 left-2 z-10 bg-blue-600 text-[8px] text-white px-2 py-0.5 font-bold tracking-widest uppercase">After</span>
                        <Image 
                          src={project.after} 
                          alt="Completed Project" 
                          fill 
                          className="object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                      </div>
                    </div>
                    <div>
                      <span className="text-blue-500 text-[9px] font-black uppercase tracking-widest">{project.category}</span>
                      <h3 className="text-white text-lg font-bold uppercase mt-1 tracking-tight">{project.title}</h3>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-64 border border-dashed border-white/10 rounded-lg"
              >
                <p className="text-white/40 uppercase text-[10px] tracking-widest">No projects found in this category</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}