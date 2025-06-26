import { db } from './server/db.js';
import { menuItems, categories } from './shared/schema.js';

console.log('Seeding Emparo Peri Peri database with authentic menu items...');

// Create categories first
const categoryData = [
  { name: 'Grilled Chicken', displayOrder: 1, active: true },
  { name: 'Burgers', displayOrder: 2, active: true },
  { name: 'Wraps', displayOrder: 3, active: true },
  { name: 'Wings & Strips', displayOrder: 4, active: true },
  { name: 'Sides', displayOrder: 5, active: true },
  { name: 'Drinks', displayOrder: 6, active: true },
];

// Authentic menu items for Emparo Peri Peri
const menuData = [
  // Grilled Chicken
  {
    name: 'Whole Peri Peri Chicken',
    description: 'Flame-grilled whole chicken marinated in authentic Portuguese peri peri spices for 24 hours',
    price: 12.99,
    category: 'Grilled Chicken',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 08_20_28 PM_1750972099295.png',
    spiceLevel: 3,
    available: true,
    featured: true
  },
  {
    name: 'Half Peri Peri Chicken',
    description: 'Perfectly grilled half chicken with your choice of mild, medium, hot, or extra hot peri peri sauce',
    price: 7.99,
    category: 'Grilled Chicken',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 08_27_31 PM_1750972099296.png',
    spiceLevel: 3,
    available: true,
    featured: false
  },
  {
    name: 'Flame-Grilled Chicken Breast',
    description: 'Tender chicken breast grilled over open flames with authentic African bird eye chili sauce',
    price: 6.99,
    category: 'Grilled Chicken',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 10_02_17 PM_1750972099296.png',
    spiceLevel: 2,
    available: true,
    featured: false
  },
  
  // Burgers
  {
    name: 'Peri Peri Chicken Burger',
    description: 'Grilled chicken breast with lettuce, tomato, and our signature peri peri mayo in a brioche bun',
    price: 8.99,
    category: 'Burgers',
    imageUrl: '/images/ChatGPT Image May 19, 2025, 09_40_38 PM_1750972099295.png',
    spiceLevel: 2,
    available: true,
    featured: true
  },
  {
    name: 'Double Peri Peri Burger',
    description: 'Two grilled chicken breasts with extra peri peri sauce, cheese, and fresh salad',
    price: 11.99,
    category: 'Burgers',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 10_30_54 PM_1750972115721.png',
    spiceLevel: 3,
    available: true,
    featured: false
  },
  
  // Wraps
  {
    name: 'Peri Peri Chicken Wrap',
    description: 'Grilled chicken strips with fresh salad and peri peri sauce wrapped in soft tortilla',
    price: 7.49,
    category: 'Wraps',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 09_38_22 PM_1750972099296.png',
    spiceLevel: 2,
    available: true,
    featured: false
  },
  
  // Wings & Strips
  {
    name: 'Peri Peri Chicken Wings',
    description: 'Succulent chicken wings marinated and grilled with your choice of spice level',
    price: 6.99,
    category: 'Wings & Strips',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 09_20_56 PM_1750972099296.png',
    spiceLevel: 3,
    available: true,
    featured: true
  },
  {
    name: 'Chicken Strips',
    description: 'Tender chicken breast strips grilled with peri peri spices, served with dipping sauce',
    price: 5.99,
    category: 'Wings & Strips',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 10_21_24 PM_1750972099297.png',
    spiceLevel: 2,
    available: true,
    featured: false
  },
  {
    name: 'Crispy Chicken Bites',
    description: 'Golden chicken pieces with a crispy coating, served with peri peri dipping sauce',
    price: 5.49,
    category: 'Wings & Strips',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 10_24_05 PM_1750972099297.png',
    spiceLevel: 1,
    available: true,
    featured: false
  },
  
  // Sides
  {
    name: 'Peri Peri Fries',
    description: 'Golden fries seasoned with our signature peri peri spice blend',
    price: 3.99,
    category: 'Sides',
    imageUrl: '/images/ChatGPT Image May 19, 2025, 12_34_06 PM_1750972099295.png',
    spiceLevel: 1,
    available: true,
    featured: false
  },
  {
    name: 'Loaded Peri Fries',
    description: 'Peri peri fries topped with melted cheese and jalapeños',
    price: 5.99,
    category: 'Sides',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 10_28_27 PM_1750972115720.png',
    spiceLevel: 2,
    available: true,
    featured: false
  },
  
  // Drinks
  {
    name: 'Emparo Signature Shake',
    description: 'Creamy milkshake available in chocolate, vanilla, or strawberry',
    price: 4.99,
    category: 'Drinks',
    imageUrl: '/images/ChatGPT Image May 22, 2025, 10_32_14 PM_1750972115722.png',
    spiceLevel: 0,
    available: true,
    featured: false
  },
  {
    name: 'Fresh Orange Juice',
    description: 'Freshly squeezed orange juice to cool down the heat',
    price: 3.49,
    category: 'Drinks',
    spiceLevel: 0,
    available: true,
    featured: false
  },
  {
    name: 'Soft Drinks',
    description: 'Coca-Cola, Fanta, Sprite, and other refreshing drinks',
    price: 2.49,
    category: 'Drinks',
    spiceLevel: 0,
    available: true,
    featured: false
  }
];

async function seedDatabase() {
  try {
    // Insert categories
    console.log('Adding categories...');
    for (const category of categoryData) {
      await db.insert(categories).values(category).onConflictDoNothing();
    }
    
    // Insert menu items
    console.log('Adding menu items...');
    for (const item of menuData) {
      await db.insert(menuItems).values(item).onConflictDoNothing();
    }
    
    console.log('✅ Database seeded successfully with authentic Emparo Peri Peri menu!');
    console.log(`Added ${categoryData.length} categories and ${menuData.length} menu items`);
    
  } catch (error) {
    console.error('❌ Error seeding database:', error);
  }
}

seedDatabase();