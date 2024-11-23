import { Github } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="w-full py-6 bg-card border-t border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground">
            © 2023 YouTube to MP3 Converter. All rights reserved.
          </div>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <Link href="/terms" className="text-sm text-accent hover:text-accent/80">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm text-accent hover:text-accent/80">
              Privacy Policy
            </Link>
            <Link href="https://github.com/yourusername/youtube-to-mp3" className="text-accent hover:text-accent/80">
              <Github size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

