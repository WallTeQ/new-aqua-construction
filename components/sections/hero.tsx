"use client"

import { motion } from "framer-motion"
import { ArrowRight, Building2, HardHat, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 via-background to-background" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 transform skew-x-12 origin-top-right" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Building2 className="h-4 w-4" />
              <span>Est. 2024 | Liberian-Owned</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
              Building Liberia&apos;s <span className="text-primary">Future</span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              New Aqualia Construction Company delivers technically compliant, safe, and durable infrastructure
              solutions across Liberia with engineering excellence and reliable delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="gap-2">
                <Link href="#contact">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">40+</div>
                <div className="text-sm text-muted-foreground">Years Legacy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Compliant</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">PPCC</div>
                <div className="text-sm text-muted-foreground">Certified</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative circles */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute inset-4 bg-accent/20 rounded-full blur-2xl" />

              {/* Main content */}
              <div className="relative h-full flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-card p-6 rounded-2xl shadow-lg border border-border"
                  >
                    <Building2 className="h-10 w-10 text-primary mb-3" />
                    <div className="font-semibold text-foreground">Civil Works</div>
                    <div className="text-sm text-muted-foreground">Roads & Drainage</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-card p-6 rounded-2xl shadow-lg border border-border mt-8"
                  >
                    <HardHat className="h-10 w-10 text-primary mb-3" />
                    <div className="font-semibold text-foreground">Construction</div>
                    <div className="text-sm text-muted-foreground">Buildings & Structures</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-card p-6 rounded-2xl shadow-lg border border-border"
                  >
                    <Shield className="h-10 w-10 text-primary mb-3" />
                    <div className="font-semibold text-foreground">Quality</div>
                    <div className="text-sm text-muted-foreground">HSE Compliance</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="bg-primary p-6 rounded-2xl shadow-lg mt-8">
                    <div className="text-3xl font-bold text-primary-foreground mb-1">NACOC</div>
                    <div className="text-sm text-primary-foreground/80">Excellence</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
