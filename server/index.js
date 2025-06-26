import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { registerRoutes } from './routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Static files for images
app.use('/images', express.static('attached_assets'));

// Routes
await registerRoutes(app);

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Emparo Peri Peri server running on port ${PORT}`);
  console.log(`🌐 API: http://localhost:${PORT}/api`);
  console.log(`📊 Database: ${process.env.DATABASE_URL ? 'Connected to Turso' : 'No database configured'}`);
});