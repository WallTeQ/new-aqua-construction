import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Values } from "@/components/sections/values"
import { Experience } from "@/components/sections/experience"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Values />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}
