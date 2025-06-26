import { Link, useLocation } from 'wouter'
import { Phone, MapPin, Clock } from 'lucide-react'

export default function Header() {
  const [location] = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-sm border-b border-border">
      {/* Top bar with contact info */}
      <div className="bg-primary text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center space-x-4 mb-2 sm:mb-0">
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>020 3441 6940</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>24 Blackstock Rd, Finsbury Park, London N4 2DW</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>Thu-Tue: 1PM-4AM | Closed Wednesday</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-xl">E</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Emparo Peri Peri</h1>
                <p className="text-sm text-muted-foreground">Authentic Portuguese Flavors</p>
              </div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location === item.href
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-foreground'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-foreground hover:text-primary p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        <div className="md:hidden border-t border-border py-4">
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href}>
                <span
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary ${
                    location === item.href ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}