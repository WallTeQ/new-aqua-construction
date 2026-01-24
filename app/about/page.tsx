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

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Visual */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm"
                >
                  <History className="h-8 w-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground">1981</div>
                  <div className="text-sm text-muted-foreground">Original Foundation</div>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} className="bg-primary p-6 rounded-2xl shadow-sm">
                  <div className="text-2xl font-bold text-primary-foreground">2024</div>
                  <div className="text-sm text-primary-foreground/80">New Beginning</div>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm"
                >
                  <Target className="h-8 w-8 text-primary mb-3" />
                  <div className="font-semibold text-foreground">Vision</div>
                  <div className="text-sm text-muted-foreground">West African Leader</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm"
                >
                  <Award className="h-8 w-8 text-primary mb-3" />
                  <div className="font-semibold text-foreground">Legacy</div>
                  <div className="text-sm text-muted-foreground">National Recognition</div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              About Us
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
              A Legacy of Engineering <span className="text-primary">Excellence</span>
            </h2>

            <p className="text-muted-foreground leading-relaxed mb-6">
              New Aqualia Construction Company (NACOC) is the restructured successor of Aqualia Construction Company
              (ACC), founded in 1981 by the Late Mr. William A. Cox Sr. Our company became nationally recognized during
              Liberia&apos;s civil crisis for voluntarily rehabilitating major roads in Monrovia.
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Following formal reorganization under new management, we now represent a deliberate shift toward modern
              engineering practices, regulatory compliance, and alignment with contemporary procurement standards.
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
