import { db } from './server/db.js';

console.log('Creating database tables for Emparo Peri Peri...');

async function createTables() {
  try {
    // Drop existing tables to recreate with correct schema
    await db.run(`DROP TABLE IF EXISTS menu_items`);
    await db.run(`DROP TABLE IF EXISTS categories`);
    
    // Create categories table
    await db.run(`
      CREATE TABLE categories (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        display_order INTEGER DEFAULT 0,
        active INTEGER DEFAULT 1
      )
    `);

    // Create menu_items table with correct column names
    await db.run(`
      CREATE TABLE menu_items (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT,
        price REAL NOT NULL,
        category TEXT NOT NULL,
        image_url TEXT,
        spice_level INTEGER DEFAULT 0,
        available INTEGER DEFAULT 1,
        featured INTEGER DEFAULT 0
      )
    `);

    // Create orders table for future use
    await db.run(`
      CREATE TABLE IF NOT EXISTS orders (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        customer_name TEXT,
        customer_phone TEXT,
        customer_email TEXT,
        order_type TEXT NOT NULL,
        total_amount REAL NOT NULL,
        status TEXT DEFAULT 'pending',
        order_items TEXT,
        delivery_address TEXT,
        special_instructions TEXT,
        created_at INTEGER
      )
    `);

    console.log('✅ Database tables created successfully!');
    
  } catch (error) {
    console.error('❌ Error creating tables:', error);
  }
}

createTables();