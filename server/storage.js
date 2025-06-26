import { db } from './db.js';
import { menuItems, categories, orders } from '../shared/schema.js';
import { eq } from 'drizzle-orm';

export class DatabaseStorage {
  // Menu Items
  async getMenuItems() {
    return await db.select().from(menuItems).where(eq(menuItems.available, true));
  }

  async getMenuItemsByCategory(category) {
    return await db.select().from(menuItems)
      .where(eq(menuItems.category, category))
      .where(eq(menuItems.available, true));
  }

  async getFeaturedItems() {
    return await db.select().from(menuItems)
      .where(eq(menuItems.featured, true))
      .where(eq(menuItems.available, true));
  }

  async getMenuItem(id) {
    const [item] = await db.select().from(menuItems).where(eq(menuItems.id, id));
    return item;
  }

  // Categories
  async getCategories() {
    return await db.select().from(categories).where(eq(categories.active, true));
  }

  // Orders
  async createOrder(orderData) {
    const [order] = await db.insert(orders).values({
      ...orderData,
      createdAt: new Date()
    }).returning();
    return order;
  }

  async getOrder(id) {
    const [order] = await db.select().from(orders).where(eq(orders.id, id));
    return order;
  }
}

export const storage = new DatabaseStorage();