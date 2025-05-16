"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Software Developer",
    company: "Arthmate Finance India Private Limited",
    location: "Gurgaon",
    period: "July 2024 - Present",
    description: [
      "API Integration: Integrated third-party APIs with Node.js, improving efficiency, data accuracy, and reducing vulnerabilities by 50%.",
      "Front end Development: Enhanced UI using React.js and Hooks for centralized data flow and better performance.",
      "Caching & Cost Reduction: Used Redis to cut data retrieval time by 75% and API costs by 30%.",
      "Cloud Automation: Set up AWS email workflows, reducing missed payments by 30%.",
      "Backend & Database: Migrated MySQL to Supabase PostgreSQL, built backend with Supabase, Deno, TypeScript, and tested APIs in Postman.",
      "UI Integration: Integrated DronaHQ UIs into React apps for seamless functionality.",
    ],
    skills: ["React.js", "Node.js", "Redis", "AWS", "Supabase", "TypeScript"],
  },
  {
    title: "Data Analyst Intern",
    company: "ZAAMO E-Commerce Private Limited",
    location: "Work From Home",
    period: "June 2022 - July 2022",
    description: [
      "Worked on transforming numbers, facts and data points into strategic business decisions and actionable insights.",
      "Analyzed sales figures, logistics, and transport data along with comprehensive market research.",
    ],
    skills: ["Data Analysis", "Market Research", "Business Intelligence"],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">My professional journey and the companies I&apos;ve worked with</p>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    <div>
                      <CardTitle>{exp.title}</CardTitle>
                      <CardDescription className="mt-1">
                        {exp.company} | {exp.location}
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
