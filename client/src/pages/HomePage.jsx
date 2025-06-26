import { Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { Star, Clock, MapPin, Phone } from 'lucide-react';

function HomePage() {
  const { data: featuredItems, isLoading } = useQuery({
    queryKey: ['/api/menu/featured'],
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-orange-500 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Authentic Peri Peri
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Experience the fiery flavors of Portugal in the heart of Finsbury Park. 
            Fresh grilled chicken, authentic peri peri spices, and traditional recipes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
                View Menu
              </button>
            </Link>
            <Link href="/contact">
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors">
                Order Now
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Our Signature Dishes
          </h2>
          
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse">
                  <div className="h-48 bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-8 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredItems?.slice(0, 3).map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  {item.imageUrl && (
                    <img 
                      src={item.imageUrl} 
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{item.name}</h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-red-600">£{item.price}</span>
                      <div className="flex items-center">
                        {[...Array(item.spiceLevel)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-red-500 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Link href="/menu">
              <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors">
                View Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-gray-800">
                About Emparo Peri Peri
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Located in the vibrant heart of Finsbury Park, Emparo Peri Peri brings you the authentic taste of Portuguese peri peri cuisine. Our recipes have been passed down through generations, ensuring every bite delivers the perfect balance of flavor and heat.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We use only the finest ingredients, from succulent flame-grilled chicken to our signature peri peri sauce made from African bird's eye chilies. Whether you prefer mild or extra hot, we have the perfect spice level for you.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Opening Hours</p>
                    <p className="text-gray-600">Thu-Tue: 1 PM–4 AM</p>
                    <p className="text-gray-600">Closed Wednesday</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-gray-800">Call Us</p>
                    <p className="text-gray-600">020 3441 6940</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-red-600 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Why Choose Emparo?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>Authentic Portuguese recipes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>Flame-grilled to perfection</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>Fresh ingredients daily</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span>5 spice levels available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
            Visit Us Today
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-6 h-6 text-red-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">Our Location</h3>
                  <p className="text-gray-600">24 Blackstock Rd, Finsbury Park, London N4 2DW</p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                Conveniently located near Finsbury Park station, we're easily accessible by public transport. 
                Street parking is available, and we're surrounded by vibrant local shops and amenities.
              </p>
              <Link href="/contact">
                <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                  Get Directions
                </button>
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map integration available</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;