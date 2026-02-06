"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeHash, setActiveHash] = useState("") // Track the #section
  const pathname = usePathname()

  // 1. Handle Scroll background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // 2. Handle Hash changes (the highlighting logic)
  useEffect(() => {
    // Set initial hash
    setActiveHash(window.location.hash || "#")

    const handleHashChange = () => {
      setActiveHash(window.location.hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [pathname])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Experience", href: "/#experience" },
    { name: "Contact", href: "/#contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-black/95 backdrop-blur-md border-b border-white/10 py-3" 
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <Link href="/" onClick={() => setActiveHash("#")} className="flex flex-col items-start group">
            <div className="relative h-12 w-auto md:h-14 mb-1">
              <Image
                src="/New logo.png" 
                alt="NACC Logo"
                width={150}
                height={50}
                className="object-contain h-full w-auto brightness-110" 
                priority
              />
            </div>
            <div className="flex flex-col border-t border-white/20 pt-1">
              <span className="text-[10px] md:text-[11px] font-black tracking-[0.2em] text-white uppercase">
                New Aqualia Construction Company
              </span>
              <span className="text-[9px] md:text-[10px] font-bold tracking-widest text-blue-500 uppercase">
                (NACC)
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              // LOGIC: Check if the current hash matches the link href
              const linkHash = link.href === "/" ? "#" : link.href.replace("/", "")
              const isActive = (activeHash || "#") === linkHash
              
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveHash(linkHash)}
                  className={`relative text-xs font-black uppercase tracking-[0.15em] transition-all duration-300 ${
                    isActive ? "text-blue-500" : "text-white hover:text-blue-400"
                  }`}
                >
                  {link.name}
                  
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Mobile Button */}
          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </nav>
  )
}