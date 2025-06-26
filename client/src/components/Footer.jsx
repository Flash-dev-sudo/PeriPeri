import { Phone, MapPin, Clock, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h3 className="text-xl font-bold">Emparo Peri Peri</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Experience the authentic taste of Portuguese peri peri chicken in the heart of London. 
              Fresh ingredients, bold flavors, and traditional cooking methods.
            </p>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                <span>24 Blackstock Rd, Finsbury Park, London N4 2DW</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-primary" />
                <span>020 3441 6940</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-primary" />
                <span>info@emparoperiperi.co.uk</span>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Opening Hours</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex justify-between">
                <span>Thursday - Tuesday</span>
                <span>1:00 PM - 4:00 AM</span>
              </div>
              <div className="flex justify-between">
                <span>Wednesday</span>
                <span className="text-red-400">Closed</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-primary/10 border border-primary/20 rounded">
              <div className="flex items-center text-primary">
                <Clock className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Late Night Dining Available</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Emparo Peri Peri. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}