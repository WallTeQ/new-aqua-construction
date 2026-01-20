"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Heart, Star, Shield, Users, Clock } from "lucide-react"

const values = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "Conducting all business with transparency, accountability, and strict adherence to contractual and regulatory obligations.",
  },
  {
    icon: Star,
    title: "Quality",
    description:
      "Delivering works that conform to approved drawings, specifications, and recognized engineering standards.",
  },
  {
    icon: Shield,
    title: "Safety",
    description: "Protecting workers, the public, and the environment through proactive HSE management practices.",
  },
  {
    icon: Users,
    title: "Professionalism",
    description: "Maintaining high standards of technical competence, discipline, and communication at all levels.",
  },
  {
    icon: Clock,
    title: "Reliability",
    description: "Meeting project schedules, budgets, and client expectations with consistency and dependability.",
  },
]

export function Values() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="values" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Built on Strong <span className="text-primary">Foundations</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Our core values guide every project and interaction, ensuring we deliver excellence in all we do.
          </p>
        </motion.div>

        {/* Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center p-6 rounded-2xl bg-card border border-border shadow-sm"
            >
              <div className="h-14 w-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
