import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import Services from "@/components/sections/services"
import { Values } from "@/components/sections/values"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar is automatically provided by layout.tsx */}
      <Hero />
      <About />
      <Services />
      <Values />
      <Experience />
      <Contact />
      {/* Footer is automatically provided by layout.tsx */}
    </div>
  )
}