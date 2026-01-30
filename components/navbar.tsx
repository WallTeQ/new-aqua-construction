"use client"

import { useState } from "react" // Added this
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react" // Added icons

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false) // State to track mobile menu

  const isActive = (path: string) => pathname === path

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsOpen(false)

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/logo.jpeg"   
            alt="NACOC Logo"
            width={50}      
            height={15}      
            className="object-contain"
            priority         
          />
        </Link>

        {/* Desktop Navigation - Hidden on mobile (hidden md:flex) */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive(link.path) ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button - Shown only on small screens (md:hidden) */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background border-b shadow-lg animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={closeMenu}
                className={`text-lg font-medium ${
                  isActive(link.path) ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}