import express from 'express';
import { createServer } from 'http';
import { storage } from './storage.js';

export async function registerRoutes(app) {
  // Menu routes
  app.get('/api/menu', async (req, res) => {
    try {
      const items = await storage.getMenuItems();
      res.json(items);
    } catch (error) {
      console.error('Error fetching menu:', error);
      res.status(500).json({ error: 'Failed to fetch menu items' });
    }
  });

  app.get('/api/menu/category/:category', async (req, res) => {
    try {
      const { category } = req.params;
      const items = await storage.getMenuItemsByCategory(category);
      res.json(items);
    } catch (error) {
      console.error('Error fetching menu by category:', error);
      res.status(500).json({ error: 'Failed to fetch menu items' });
    }
  });

  app.get('/api/menu/featured', async (req, res) => {
    try {
      const items = await storage.getFeaturedItems();
      res.json(items);
    } catch (error) {
      console.error('Error fetching featured items:', error);
      res.status(500).json({ error: 'Failed to fetch featured items' });
    }
  });

  app.get('/api/categories', async (req, res) => {
    try {
      const categories = await storage.getCategories();
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Failed to fetch categories' });
    }
  });

  // Order routes (for future ordering system)
  app.post('/api/orders', async (req, res) => {
    try {
      const order = await storage.createOrder(req.body);
      res.json(order);
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create order' });
    }
  });

  app.get('/api/orders/:id', async (req, res) => {
    try {
      const { id } = req.params;
      const order = await storage.getOrder(parseInt(id));
      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }
      res.json(order);
    } catch (error) {
      console.error('Error fetching order:', error);
      res.status(500).json({ error: 'Failed to fetch order' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}