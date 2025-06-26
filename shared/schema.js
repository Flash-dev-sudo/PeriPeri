import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Menu Items Table
export const menuItems = sqliteTable("menu_items", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description"),
  price: real("price").notNull(),
  category: text("category").notNull(),
  imageUrl: text("image_url"),
  spiceLevel: integer("spice_level").default(0), // 0-5 scale
  available: integer("available", { mode: "boolean" }).default(true),
  featured: integer("featured", { mode: "boolean" }).default(false),
});

// Categories Table
export const categories = sqliteTable("categories", {
  id: integer("id").primaryKey(),
  name: text("name").notNull(),
  displayOrder: integer("display_order").default(0),
  active: integer("active", { mode: "boolean" }).default(true),
});

// Orders Table (for future ordering system)
export const orders = sqliteTable("orders", {
  id: integer("id").primaryKey(),
  customerName: text("customer_name"),
  customerPhone: text("customer_phone"),
  customerEmail: text("customer_email"),
  orderType: text("order_type").notNull(), // 'delivery' or 'collection'
  totalAmount: real("total_amount").notNull(),
  status: text("status").default("pending"),
  orderItems: text("order_items"), // JSON string of items
  deliveryAddress: text("delivery_address"),
  specialInstructions: text("special_instructions"),
  createdAt: integer("created_at", { mode: "timestamp" }),
});

// Insert schemas for forms
export const insertMenuItem = createInsertSchema(menuItems).omit({
  id: true,
});

export const insertOrder = createInsertSchema(orders).omit({
  id: true,
  createdAt: true,
});

// Schema exports for runtime usage