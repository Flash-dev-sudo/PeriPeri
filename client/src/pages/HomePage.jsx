import { useQuery } from '@tanstack/react-query'
import { Link } from 'wouter'
import { Star, Clock, MapPin, Phone } from 'lucide-react'

// Import food images
import heroChicken from '@assets/ChatGPT Image May 22, 2025, 08_27_31 PM_1750972099296.png'
import chickenBurger from '@assets/ChatGPT Image May 19, 2025, 09_40_38 PM_1750972099295.png'
import grilledChicken from '@assets/ChatGPT Image May 22, 2025, 08_20_28 PM_1750972099295.png'
import chickenWings from '@assets/ChatGPT Image May 22, 2025, 09_20_56 PM_1750972099296.png'
import chickenWrap from '@assets/ChatGPT Image May 22, 2025, 09_38_22 PM_1750972099296.png'
import friedChicken from '@assets/ChatGPT Image May 22, 2025, 10_21_07 PM_1750972099297.png'
import chickenPlatter from '@assets/ChatGPT Image May 22, 2025, 10_28_35 PM_1750972115720.png'

export default function HomePage() {
  const { data: featuredItems = [], isLoading } = useQuery({
    queryKey: ['/api/menu/featured'],
  })

  const featuredImages = [
    { src: chickenBurger, alt: 'Peri Peri Chicken Burger', title: 'Signature Burgers' },
    { src: grilledChicken, alt: 'Grilled Peri Peri Chicken', title: 'Grilled Chicken' },
    { src: chickenWings, alt: 'Glazed Chicken Wings', title: 'Chicken Wings' },
    { src: chickenWrap, alt: 'Chicken Wrap', title: 'Fresh Wraps' },
    { src: friedChicken, alt: 'Fried Chicken Strips', title: 'Chicken Strips' },
    { src: chickenPlatter, alt: 'Chicken Platter with Rice', title: 'Platters' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroChicken} 
            alt="Fresh Grilled Peri Peri Chicken"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Authentic <span className="text-primary">Peri Peri</span> Chicken
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Experience the bold flavors of Portugal in the heart of London
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu">
              <button className="bg-primary hover:bg-accent text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                View Our Menu
              </button>
            </Link>
            <a href="tel:02034416940">
              <button className="border-2 border-white text-white hover:bg-white hover:text-foreground px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Order Now: 020 3441 6940
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Featured Items Gallery */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Signature Dishes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From flame-grilled chicken to crispy strips, every dish is prepared with authentic peri peri spices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredImages.map((item, index) => (
              <div key={index} className="food-card bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.alt}
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground mb-4">Fresh, flavorful, and cooked to perfection</p>
                  <div className="flex items-center text-primary">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                    <span className="ml-2 text-sm text-muted-foreground">(4.9/5)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/menu">
              <button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                See Full Menu
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Why Choose Emparo Peri Peri?
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">🔥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Authentic Portuguese Recipe</h3>
                    <p className="text-muted-foreground">Traditional peri peri marinade passed down through generations</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">🌶️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Perfect Spice Levels</h3>
                    <p className="text-muted-foreground">From mild to extra hot - we cater to every taste preference</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold">🥘</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Fresh Daily Preparation</h3>
                    <p className="text-muted-foreground">All chicken marinated for 24 hours and grilled fresh to order</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img 
                src={grilledChicken} 
                alt="Grilled chicken preparation"
                className="rounded-lg shadow-lg"
              />
              <img 
                src={chickenWings} 
                alt="Glazed chicken wings"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 hero-gradient text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <MapPin className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p>24 Blackstock Rd<br />Finsbury Park, London N4 2DW</p>
            </div>
            <div>
              <Phone className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p>020 3441 6940<br />For orders & reservations</p>
            </div>
            <div>
              <Clock className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Opening Hours</h3>
              <p>Thu-Tue: 1PM-4AM<br />Closed Wednesday</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}