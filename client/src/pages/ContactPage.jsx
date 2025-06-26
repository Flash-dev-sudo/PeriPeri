import { MapPin, Phone, Clock, Mail } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Visit Us</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Find us in the heart of Finsbury Park, London. We're here to serve you the best peri peri chicken experience.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Get in Touch</h2>
            
            <div className="space-y-6">
              {/* Location */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Our Location</h3>
                  <p className="text-muted-foreground">
                    24 Blackstock Rd<br />
                    Finsbury Park<br />
                    London N4 2DW<br />
                    United Kingdom
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Phone Number</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:02034416940" className="hover:text-primary transition-colors">
                      020 3441 6940
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground">For orders, reservations & inquiries</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@emparoperiperi.co.uk" className="hover:text-primary transition-colors">
                      info@emparoperiperi.co.uk
                    </a>
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">Opening Hours</h3>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Thursday - Tuesday: 1:00 PM - 4:00 AM</p>
                    <p className="text-red-500">Wednesday: Closed</p>
                  </div>
                  <p className="text-sm text-primary font-medium mt-2">Late night dining available</p>
                </div>
              </div>
            </div>

            {/* Transportation */}
            <div className="mt-8 p-6 bg-muted rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-4">How to Find Us</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Nearest Station:</strong> Finsbury Park (Piccadilly, Victoria, National Rail)</p>
                <p><strong>Bus Routes:</strong> 4, 19, 29, 106, 153, 210, 236, 253, 254, 259</p>
                <p><strong>Walking:</strong> 3 minutes from Finsbury Park Station</p>
                <p><strong>Parking:</strong> Street parking available on surrounding roads</p>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-8">Find Us on the Map</h2>
            <div className="bg-muted rounded-lg p-8 text-center h-96 flex items-center justify-center">
              <div>
                <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground mb-4">
                  Located on Blackstock Road, just minutes from Finsbury Park Station
                </p>
                <a 
                  href="https://maps.google.com/maps?q=24+Blackstock+Rd,+Finsbury+Park,+London+N4+2DW" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-primary hover:bg-accent text-white px-6 py-2 rounded-lg font-medium transition-colors inline-block"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a href="tel:02034416940">
                <button className="w-full bg-primary hover:bg-accent text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Call Now
                </button>
              </a>
              <a 
                href="https://maps.google.com/maps?q=24+Blackstock+Rd,+Finsbury+Park,+London+N4+2DW" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <button className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Get Directions
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🍗</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Dine In</h3>
            <p className="text-muted-foreground">Enjoy our cozy restaurant atmosphere with friends and family</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🥡</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Takeaway</h3>
            <p className="text-muted-foreground">Quick collection service - call ahead to place your order</p>
          </div>

          <div className="text-center p-6 bg-white rounded-lg shadow">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl">🚚</span>
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Delivery</h3>
            <p className="text-muted-foreground">Local delivery available - minimum order may apply</p>
          </div>
        </div>
      </div>
    </div>
  )
}