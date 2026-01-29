"use client" // Required to use usePathname

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()

  // Helper function to check if the link is active
  const isActive = (path: string) => pathname === path

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

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link 
            href="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/") ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/about") ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            About
          </Link>
          <Link 
            href="/services" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/services") ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Services
          </Link>
          <Link 
            href="/experience" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/experience") ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Experience
          </Link>
          <Link 
            href="/contact" 
            className={`text-sm font-medium transition-colors hover:text-primary ${
              isActive("/contact") ? "text-primary border-b-2 border-primary" : "text-muted-foreground"
            }`}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}