"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { CheckCircle2, History, Target, Award } from "lucide-react"

const features = [
  "Professionally structured construction firm",
  "PPCC compliant and certified",
  "Successor to ACC (Est. 1981)",
  "Modern engineering practices",
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Visual Side - Symmetrical Grid for NACC */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
              
              {/* Card 1: 1981 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-center min-h-[180px] transition-all"
              >
                <History className="h-8 w-8 text-primary mb-3" />
                <div className="text-3xl font-bold text-foreground">1981</div>
                <div className="text-sm text-muted-foreground">Original Foundation</div>
              </motion.div>

              {/* Card 2: Vision */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-center min-h-[180px] transition-all"
              >
                <Target className="h-8 w-8 text-primary mb-3" />
                <div className="text-xl font-bold text-foreground uppercase tracking-tight">Vision</div>
                <div className="text-sm text-muted-foreground">West African Leader</div>
              </motion.div>

              {/* Card 3: 2024 */}
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                className="bg-primary p-8 rounded-2xl shadow-lg shadow-primary/20 flex flex-col justify-center min-h-[180px] transition-all"
              >
                <div className="text-3xl font-bold text-primary-foreground">2024</div>
                <div className="text-sm text-primary-foreground/90 font-medium uppercase tracking-wider">New Beginning</div>
              </motion.div>

              {/* Card 4: Legacy */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-card p-8 rounded-2xl border border-border shadow-sm flex flex-col justify-center min-h-[180px] transition-all"
              >
                <Award className="h-8 w-8 text-primary mb-3" />
                <div className="text-xl font-bold text-foreground uppercase tracking-tight">Legacy</div>
                <div className="text-sm text-muted-foreground">National Recognition</div>
              </motion.div>

            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 uppercase tracking-widest">
              About Us
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 leading-tight">
              A Legacy of Engineering <span className="text-primary">Excellence</span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              New Aqualia Construction Company (<span className="text-foreground font-semibold">NACC</span>) is the restructured successor of Aqualia Construction Company
              (ACC), founded in 1981 by the Late Mr. William A. Cox Sr.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Following formal reorganization under new management, <span className="text-foreground font-semibold">NACC</span> represents a deliberate shift toward modern
              engineering practices, regulatory compliance, and alignment with contemporary procurement standards.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground font-medium text-sm">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  )
}