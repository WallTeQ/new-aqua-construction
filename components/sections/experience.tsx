"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Building2, Users, FileCheck, Globe } from "lucide-react"

const stats = [
  {
    icon: Building2,
    value: "40+",
    label: "Years Legacy",
    description: "Continuing the vision since 1981",
  },
  {
    icon: Users,
    value: "Expert",
    label: "Team",
    description: "Qualified engineers and technicians",
  },
  {
    icon: FileCheck,
    value: "PPCC",
    label: "Certified",
    description: "Full regulatory compliance",
  },
  {
    icon: Globe,
    value: "Liberia",
    label: "Coverage",
    description: "Nationwide operations",
  },
]

const clients = ["Government Institutions", "Private Developers", "NGOs", "Donor-Funded Programs"]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Stats */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Experience & Capacity
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-8 text-balance">
              Trusted by Leading <span className="text-primary">Organizations</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-card border border-border"
                >
                  <stat.icon className="h-8 w-8 text-primary mb-3" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="font-medium text-foreground">{stat.label}</div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.description}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Clients & Partners */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-xl font-semibold text-foreground mb-6">Our Clients & Partners</h3>
            <p className="text-muted-foreground leading-relaxed mb-8">
              NACOC serves a diverse portfolio of clients and collaborates with engineering consultants, suppliers, and
              subcontractors to ensure technically compliant and efficient project delivery.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="p-4 rounded-xl bg-secondary/50 text-center"
                >
                  <span className="text-sm font-medium text-foreground">{client}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-2xl bg-primary text-primary-foreground">
              <h4 className="font-semibold mb-2">Quality Assurance</h4>
              <p className="text-sm opacity-90">
                We apply systematic inspection and testing, verification of workmanship, and strict compliance with ACI,
                BS, and ASTM standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
