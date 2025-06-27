import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
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

// Serve static files from client/dist in production
if (process.env.NODE_ENV === 'production') {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  app.use(express.static(path.join(__dirname, '../client/dist')));
}

// Routes
await registerRoutes(app);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Emparo Peri Peri API is running' });
});

// Serve React app for any non-API routes in production
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, '../client/dist')));
  app.get(/^(?!\/api).*/, (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

const server = app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Emparo Peri Peri server running on port ${PORT}`);
  console.log(`🌐 API: http://localhost:${PORT}/api`);
  console.log(`📊 Database: ${process.env.DATABASE_URL ? 'Connected to Turso' : 'No database configured'}`);
});