"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
// 1. Rename the icon to HomeIcon
import { Building, HardHat, Wrench, ClipboardCheck, Ruler, Home as HomeIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Building,
    title: "Civil Engineering Works",
    description: "Road construction, rehabilitation, drainage systems, culverts, earthworks, and site development.",
  },
  {
    icon: HomeIcon, // 2. Use the renamed icon here
    title: "Building Construction",
    description: "Residential, commercial, institutional buildings including schools, clinics, offices, and warehouses.",
  },
  // ... rest of your services array ...
  {
    icon: Ruler,
    title: "Structural Works",
    description: "Reinforced concrete structures, masonry and block works, light to medium-scale steel structures.",
  },
  {
    icon: Wrench,
    title: "Renovation & Maintenance",
    description: "Building rehabilitation, structural repairs, facility maintenance, and upgrade works.",
  },
  {
    icon: ClipboardCheck,
    title: "Project Management",
    description: "Construction supervision, planning, scheduling, cost control, quality assurance, and reporting.",
  },
  {
    icon: HardHat,
    title: "Technical Training",
    description: "Skills development, safety training, and capacity building for technical staff and operatives.",
  },
]

// ... keep your containerVariants and itemVariants here ...

// 3. CRITICAL CHANGE: Added 'default' and renamed to 'ServicesPage'
export default function ServicesPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Construction <span className="text-primary">Solutions</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            From civil engineering to project management, we deliver complete infrastructure solutions tailored to your needs.
          </p>
        </motion.div>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div key={service.title}>
              <Card className="h-full group hover:shadow-lg transition-shadow border-border bg-card">
                <CardHeader>
                  <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <service.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <CardTitle className="text-foreground">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}