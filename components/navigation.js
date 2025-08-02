import Container from './container'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navigation() {
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const isActive = (path) => {
    return router.pathname === path
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-accent-2">
      <Container>
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link href="/">
            <a className="text-xl font-bold text-accent-1 hover:text-accent-7 transition-colors">
              Amit Rebala
            </a>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            <li>
              <Link href="/">
                <a className={`hover:text-accent-7 duration-200 transition-colors px-3 py-2 ${
                  isActive('/') ? 'text-accent-7 font-medium' : 'text-accent-1'
                }`}>
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/projects">
                <a className={`hover:text-accent-7 duration-200 transition-colors px-3 py-2 ${
                  isActive('/projects') ? 'text-accent-7 font-medium' : 'text-accent-1'
                }`}>
                  Projects
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className={`hover:text-accent-7 duration-200 transition-colors px-3 py-2 ${
                  isActive('/about') ? 'text-accent-7 font-medium' : 'text-accent-1'
                }`}>
                  About
                </a>
              </Link>
            </li>
            <li>
              <a
                href="mailto:reddy.rebalaamit@gmail.com"
                className="bg-accent-1 hover:bg-accent-7 text-white px-6 py-2 rounded-md transition-colors duration-200"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md hover:bg-accent-2 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-2">
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className={`block px-3 py-2 rounded-md hover:bg-accent-2 transition-colors ${
                    isActive('/') ? 'bg-accent-2 font-medium' : ''
                  }`} onClick={() => setIsMenuOpen(false)}>
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/projects">
                  <a className={`block px-3 py-2 rounded-md hover:bg-accent-2 transition-colors ${
                    isActive('/projects') ? 'bg-accent-2 font-medium' : ''
                  }`} onClick={() => setIsMenuOpen(false)}>
                    Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className={`block px-3 py-2 rounded-md hover:bg-accent-2 transition-colors ${
                    isActive('/about') ? 'bg-accent-2 font-medium' : ''
                  }`} onClick={() => setIsMenuOpen(false)}>
                    About
                  </a>
                </Link>
              </li>
              <li>
                <a
                  href="mailto:reddy.rebalaamit@gmail.com"
                  className="block w-full text-center bg-accent-1 hover:bg-accent-7 text-white px-6 py-2 rounded-md transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </Container>
    </nav>
  )
}
