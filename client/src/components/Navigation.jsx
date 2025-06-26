import { Link, useLocation } from 'wouter';
import { Phone, MapPin, Clock } from 'lucide-react';

function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      {/* Top Info Bar */}
      <div className="bg-red-600 text-white py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>020 3441 6940</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>24 Blackstock Rd, Finsbury Park, London N4 2DW</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Thu-Tue: 1 PM–4 AM | Closed Wed</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="bg-red-600 text-white px-3 py-2 rounded-lg font-bold text-xl">
                  EMPARO
                </div>
                <div className="text-red-600 font-bold text-xl">
                  PERI PERI
                </div>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link key={item.path} href={item.path}>
                  <span
                    className={`cursor-pointer py-2 px-4 rounded-md transition-colors ${
                      location === item.path
                        ? 'bg-red-600 text-white'
                        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button className="text-gray-700 hover:text-red-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navigation;