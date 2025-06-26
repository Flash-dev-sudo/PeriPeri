import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Flame, Star } from 'lucide-react'

// Import all food images
import chickenBurger from '@assets/ChatGPT Image May 19, 2025, 09_40_38 PM_1750972099295.png'
import fries from '@assets/ChatGPT Image May 19, 2025, 12_34_06 PM_1750972099295.png'
import grilledChicken from '@assets/ChatGPT Image May 22, 2025, 08_20_28 PM_1750972099295.png'
import chickenOnGrill from '@assets/ChatGPT Image May 22, 2025, 08_27_31 PM_1750972099296.png'
import chickenWings from '@assets/ChatGPT Image May 22, 2025, 09_20_56 PM_1750972099296.png'
import chickenWrap from '@assets/ChatGPT Image May 22, 2025, 09_38_22 PM_1750972099296.png'
import grilledChickenFlames from '@assets/ChatGPT Image May 22, 2025, 10_02_17 PM_1750972099296.png'
import friedChicken from '@assets/ChatGPT Image May 22, 2025, 10_21_07 PM_1750972099297.png'
import chickenStrips from '@assets/ChatGPT Image May 22, 2025, 10_21_24 PM_1750972099297.png'
import chickenNuggets from '@assets/ChatGPT Image May 22, 2025, 10_24_05 PM_1750972099297.png'
import friesBoard from '@assets/ChatGPT Image May 22, 2025, 10_28_27 PM_1750972115720.png'
import chickenPlatter from '@assets/ChatGPT Image May 22, 2025, 10_28_35 PM_1750972115720.png'
import chickenBurgerBoard from '@assets/ChatGPT Image May 22, 2025, 10_30_54 PM_1750972115721.png'
import emperoShake from '@assets/ChatGPT Image May 22, 2025, 10_32_14 PM_1750972115722.png'

// Menu data with actual food photos
const menuData = {
  'Grilled Chicken': [
    {
      id: 1,
      name: 'Whole Peri Peri Chicken',
      description: 'Flame-grilled whole chicken marinated in authentic peri peri spices for 24 hours',
      price: 12.99,
      image: grilledChicken,
      spiceLevel: 3,
      featured: true
    },
    {
      id: 2,
      name: 'Half Peri Peri Chicken',
      description: 'Perfectly grilled half chicken with your choice of spice level',
      price: 7.99,
      image: chickenOnGrill,
      spiceLevel: 3,
      featured: false
    },
    {
      id: 3,
      name: 'Flame-Grilled Chicken Breast',
      description: 'Tender chicken breast grilled over open flames',
      price: 6.99,
      image: grilledChickenFlames,
      spiceLevel: 2,
      featured: false
    }
  ],
  'Burgers': [
    {
      id: 4,
      name: 'Peri Peri Chicken Burger',
      description: 'Crispy chicken breast with lettuce, pickles and peri peri mayo in a brioche bun',
      price: 8.99,
      image: chickenBurger,
      spiceLevel: 2,
      featured: true
    },
    {
      id: 5,
      name: 'Double Chicken Burger',
      description: 'Two crispy chicken fillets with fresh salad and signature sauces',
      price: 11.99,
      image: chickenBurgerBoard,
      spiceLevel: 3,
      featured: false
    }
  ],
  'Wings & Strips': [
    {
      id: 6,
      name: 'Glazed Chicken Wings',
      description: 'Succulent chicken wings glazed in our signature peri peri sauce',
      price: 6.99,
      image: chickenWings,
      spiceLevel: 4,
      featured: true
    },
    {
      id: 7,
      name: 'Crispy Chicken Strips',
      description: 'Golden fried chicken strips with a crispy coating',
      price: 5.99,
      image: chickenStrips,
      spiceLevel: 2,
      featured: false
    },
    {
      id: 8,
      name: 'Fried Chicken Pieces',
      description: 'Traditional fried chicken pieces seasoned with herbs and spices',
      price: 7.99,
      image: friedChicken,
      spiceLevel: 2,
      featured: false
    }
  ],
  'Wraps & Platters': [
    {
      id: 9,
      name: 'Chicken Peri Peri Wrap',
      description: 'Grilled chicken with fresh lettuce and peri peri sauce in a soft tortilla',
      price: 6.99,
      image: chickenWrap,
      spiceLevel: 3,
      featured: true
    },
    {
      id: 10,
      name: 'Chicken Rice Platter',
      description: 'Grilled chicken pieces with spiced rice, fresh salad and drink',
      price: 10.99,
      image: chickenPlatter,
      spiceLevel: 3,
      featured: true
    }
  ],
  'Sides': [
    {
      id: 11,
      name: 'Peri Peri Fries',
      description: 'Golden fries seasoned with our signature peri peri spice blend',
      price: 3.99,
      image: fries,
      spiceLevel: 2,
      featured: false
    },
    {
      id: 12,
      name: 'Crispy Fries',
      description: 'Classic golden fries served with choice of sauce',
      price: 2.99,
      image: friesBoard,
      spiceLevel: 0,
      featured: false
    },
    {
      id: 13,
      name: 'Chicken Nuggets',
      description: 'Bite-sized crispy chicken pieces perfect for sharing',
      price: 4.99,
      image: chickenNuggets,
      spiceLevel: 1,
      featured: false
    }
  ],
  'Drinks': [
    {
      id: 14,
      name: 'Emparo Special Shake',
      description: 'Creamy milkshake available in vanilla, chocolate, or strawberry',
      price: 3.99,
      image: emperoShake,
      spiceLevel: 0,
      featured: false
    }
  ]
}

const categories = Object.keys(menuData)

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState('Grilled Chicken')

  const renderSpiceLevel = (level) => {
    if (level === 0) return <span className="text-gray-400">No Spice</span>
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Flame 
            key={i} 
            className={`h-4 w-4 ${i < level ? 'text-red-500 fill-current' : 'text-gray-300'}`} 
          />
        ))}
        <span className="ml-1 text-sm text-muted-foreground">
          {level === 1 ? 'Mild' : level === 2 ? 'Medium' : level === 3 ? 'Hot' : level === 4 ? 'Very Hot' : 'Extra Hot'}
        </span>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="hero-gradient text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover our range of authentic peri peri dishes, each prepared with fresh ingredients and traditional Portuguese spices
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-muted text-foreground hover:bg-primary hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[selectedCategory]?.map((item) => (
            <div key={item.id} className="food-card bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                {item.featured && (
                  <div className="absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded text-sm font-medium">
                    Popular
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{item.name}</h3>
                  <span className="text-xl font-bold text-primary">£{item.price}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  {renderSpiceLevel(item.spiceLevel)}
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm text-muted-foreground">4.8</span>
                  </div>
                </div>
                
                <button className="w-full mt-4 bg-primary hover:bg-accent text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Order?</h2>
          <p className="text-muted-foreground mb-6">
            Call us now or visit our restaurant for the freshest peri peri experience in London
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:02034416940">
              <button className="bg-primary hover:bg-accent text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Call: 020 3441 6940
              </button>
            </a>
            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Visit Restaurant
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}