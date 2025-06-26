import { Phone, MapPin, Clock, Mail } from 'lucide-react';

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-5xl font-bold text-center mb-4 text-gray-800">Contact Us</h1>
          <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
            Get in touch with us for orders, reservations, or any questions about our authentic peri peri cuisine.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">020 3441 6940</p>
                    <p className="text-sm text-gray-500">Call us for orders and reservations</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">24 Blackstock Rd</p>
                    <p className="text-gray-600">Finsbury Park, London N4 2DW</p>
                    <p className="text-sm text-gray-500">Near Finsbury Park Station</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Opening Hours</h3>
                    <div className="text-gray-600">
                      <p>Thursday - Tuesday: 1:00 PM - 4:00 AM</p>
                      <p className="text-red-600 font-medium">Closed Wednesday</p>
                    </div>
                    <p className="text-sm text-gray-500">Late night dining available</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Order Options</h3>
                    <p className="text-gray-600">Delivery & Collection Available</p>
                    <p className="text-sm text-gray-500">Call us to place your order</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Special Offers */}
            <div className="bg-red-600 text-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Why Choose Emparo Peri Peri?</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Authentic Portuguese peri peri recipes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Fresh ingredients sourced daily</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Flame-grilled to perfection</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>5 spice levels from mild to extra hot</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <span>Late night dining until 4 AM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map & Directions */}
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Find Us</h3>
                <p className="text-gray-600 mb-6">
                  Located in the heart of Finsbury Park, we're easily accessible by public transport 
                  and surrounded by vibrant local amenities.
                </p>
              </div>
              
              {/* Map placeholder */}
              <div className="h-64 bg-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Interactive map integration</p>
                  <p className="text-sm text-gray-400">24 Blackstock Rd, London N4 2DW</p>
                </div>
              </div>
              
              <div className="p-8 bg-gray-50">
                <h4 className="font-semibold text-gray-800 mb-3">Getting Here</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>By Tube:</strong> Finsbury Park Station (Victoria & Piccadilly lines)</p>
                  <p><strong>By Bus:</strong> Multiple bus routes serve Blackstock Road</p>
                  <p><strong>By Car:</strong> Street parking available nearby</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    rows="4"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Order?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Experience the authentic taste of Portugal with our flame-grilled peri peri chicken. 
            Call us now or visit our restaurant in Finsbury Park.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:02034416940"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center space-x-2"
            >
              <Phone className="w-5 h-5" />
              <span>Call Now: 020 3441 6940</span>
            </a>
            <a 
              href="https://maps.google.com/?q=24+Blackstock+Rd,+Finsbury+Park,+London+N4+2DW"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors inline-flex items-center justify-center space-x-2"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;