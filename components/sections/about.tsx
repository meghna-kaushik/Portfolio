"use client"

import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Briefcase, Code } from "lucide-react"

export default function About() {
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

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-muted/30">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">A passionate software developer with experience in full-stack development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <motion.div custom={0} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Education</h3>
                  <p className="text-muted-foreground">
                    B.Tech in Electronics and Communication Engineering from Indian Institute Of Technology, Guwahati
                    (2020-2024)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={1} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Briefcase className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Experience</h3>
                  <p className="text-muted-foreground">
                    Software Developer at Arthmate Finance India Private Limited, with experience in API integration,
                    frontend development, and cloud automation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={cardVariants} initial="hidden" animate={isVisible ? "visible" : "hidden"}>
            <Card className="h-full">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="p-3 bg-primary/10 rounded-full mb-4">
                    <Code className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Skills</h3>
                  <p className="text-muted-foreground">
                    Proficient in React.js, Node.js, JavaScript, Java, and various databases including MySQL, MongoDB,
                    and Supabase.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-card p-6 rounded-lg shadow-sm"
        >
          <p className="text-lg leading-relaxed">
            I am a software developer with a strong foundation in both frontend and backend technologies. My experience
            spans across API integration, UI enhancement, database management, and cloud automation. I am passionate
            about creating efficient, user-friendly applications and continuously expanding my technical skills.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
