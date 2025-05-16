import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-muted py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">Meghna Kaushik</h3>
            <p className="text-muted-foreground mt-2">Software Engineer</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/meghna-kaushik"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/meghna-k-029413217"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:mkgapbvk@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
            <Link href="tel:+918955995411" className="text-muted-foreground hover:text-foreground transition-colors">
              <Phone size={20} />
              <span className="sr-only">Phone</span>
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Meghna Kaushik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
