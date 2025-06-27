import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('🚀 Starting Emparo Peri Peri production build...');

// Check if client dist exists, if not build it
const distPath = path.join(process.cwd(), 'client', 'dist');
if (!fs.existsSync(distPath)) {
  console.log('📦 Building client application...');
  execSync('cd client && npm install && npm run build', { stdio: 'inherit' });
}

// Set production environment
process.env.NODE_ENV = 'production';

console.log('🌟 Starting Emparo Peri Peri server...');
import('./server/index.js');