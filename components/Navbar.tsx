'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'AI Setup', href: '/ai-setup' },
  ]

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              AI Assistant
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  pathname === link.href
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-700 hover:text-gray-900'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
