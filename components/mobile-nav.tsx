"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        className="flex items-center justify-center w-10 h-10 rounded-md hover:bg-blue-50"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 rounded-md bg-blue-600 py-2 shadow-lg z-50">
          <Link
            href="#home"
            className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Inicio 
          </Link>
          <Link
            href="#services"
            className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Servicios 
          </Link>
          <Link
            href="#about"
            className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Sobre Nosotros 
          </Link>
          <Link
            href="#projects"
            className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Proyectos 
          </Link>
          <Link
            href="#contact"
            className="block px-4 py-2 text-white hover:text-yellow-500 hover:bg-blue-700"
            onClick={closeMenu}
          >
            Contacto 
          </Link>
        </div>
      )}
    </div>
  )
}

