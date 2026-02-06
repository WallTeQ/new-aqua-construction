"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const projects = [
  {
    title: "Modern Residential Estate",
    category: "Residential",
    before: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
    description: "Full exterior modernization and structural reinforcement."
  },
  {
    title: "Metropolitan Business Hub",
    category: "Commercial",
    before: "https://images.unsplash.com/photo-1541913057-7147d9e1bb68?q=80&w=1200",
    after: "https://images.unsplash.com/photo-1503387762-592dea58ef21?q=80&w=1200",
    description: "Complete foundation overhaul for high-rise development."
  },
  {
    title: "Heavy Industrial Facility",
    category: "Industrial",
    before: "https://images.unsplash.com/photo-1513828583688-c52646db42da?q=80&w=1200",
    after: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200",
    description: "Industrial steel framework and specialized flooring."
  }
]

const categories = ["All", "Residential", "Commercial", "Industrial"]

export function Gallery() {
  const [filter, setFilter] = useState("All")
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter)

  return (
    <section id="gallery" className="py-32 bg-[#050505] text-white">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-blue-500 font-black tracking-[0.3em] text-xs uppercase mb-4 block"
            >
              Visual Proof of Excellence
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              The <span className="text-outline text-transparent" style={{ WebkitTextStroke: '1px white' }}>Transformation</span> Archive
            </h2>
          </div>
          
          {/* Modern Glass Filter */}
          <div className="flex gap-2 bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                  filter === cat ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "hover:bg-white/5 text-white/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.title}
                className="relative group cursor-crosshair"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10">
                  {/* Before Image (Base) */}
                  <Image src={project.before} alt="Before" fill className="object-cover grayscale" />
                  
                  {/* After Image (Slide reveal on hover) */}
                  <motion.div 
                    className="absolute inset-0 z-10"
                    initial={{ clipPath: 'inset(0 0 0 100%)' }}
                    animate={{ clipPath: hoveredIndex === idx ? 'inset(0 0 0 0%)' : 'inset(0 0 0 100%)' }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image src={project.after} alt="After" fill className="object-cover" />
                  </motion.div>

                  {/* Badges */}
                  <div className="absolute top-6 left-6 z-20 flex gap-2">
                    <span className="bg-black/80 backdrop-blur-md text-[8px] font-black px-3 py-1 border border-white/10 uppercase tracking-widest">Before</span>
                    <span className="bg-blue-600 text-[8px] font-black px-3 py-1 uppercase tracking-widest">After</span>
                  </div>

                  {/* Hover Hint */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="bg-white text-black px-4 py-2 text-[10px] font-black uppercase tracking-tighter rounded-full translate-y-4 group-hover:translate-y-0 transition-transform">
                      Hover to Reveal Transformation
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight group-hover:text-blue-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-white/40 text-sm mt-2 max-w-md">{project.description}</p>
                  </div>
                  <span className="text-white/20 font-black text-6xl select-none">0{idx + 1}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}