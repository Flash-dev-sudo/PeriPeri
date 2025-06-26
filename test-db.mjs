import { db } from './server/db.js';
import { menuItems } from './shared/schema.js';

async function testDatabase() {
  console.log('Testing database connection...');
  console.log('Database URL:', process.env.DATABASE_URL ? 'Set' : 'Not set');

  try {
    const items = await db.select().from(menuItems).limit(5);
    console.log('✅ Database connected successfully!');
    console.log('Sample menu items:', items);
  } catch (error) {
    console.error('❌ Database connection failed:', error.message);
  }
}

testDatabase();