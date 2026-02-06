import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import Services from "@/components/sections/services"
import { Gallery } from "@/components/sections/gallery" // 1. Import added here
import { Values } from "@/components/sections/values"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar & Footer are provided by layout.tsx */}
      <Hero />
      <About />
      <Services />
      
      {/* 2. Gallery added between Services and Values */}
      <Gallery /> 
      
      <Values />
      <Experience />
      <Contact />
    </div>
  )
}