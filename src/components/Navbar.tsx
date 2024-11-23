"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Music2 } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { AboutPopup } from "@/components/AboutPopup"
import { ContactPopup } from "@/components/ContactPopup"
import Image from 'next/image'

export function Navbar() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)

  return (
    <nav className="w-full py-4 bg-card border-b border-accent/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 gap-4">
            <Image src={'/logo.svg'} alt='logo' width={36} height={36} />
            <span className="text-lg font-bold text-accent">MelodyFetch</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-accent hover:text-accent/80 hover:bg-accent/10"
              onClick={() => setIsAboutOpen(true)}
            >
              About
            </Button>
            <Button 
              variant="ghost" 
              className="text-accent hover:text-accent/80 hover:bg-accent/10"
              onClick={() => setIsContactOpen(true)}
            >
              Contact
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </div>
      <AboutPopup isOpen={isAboutOpen} onClose={() => setIsAboutOpen(false)} />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </nav>
  )
}

