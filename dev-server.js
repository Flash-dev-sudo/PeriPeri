#!/usr/bin/env node

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting Emparo Peri Peri development environment...');

// Start backend server
const serverProcess = spawn('node', ['server/index.js'], {
  stdio: ['inherit', 'inherit', 'inherit'],
  env: { 
    ...process.env, 
    NODE_ENV: 'development',
    PORT: '3000'
  },
  cwd: __dirname
});

// Wait a moment for backend to start, then start frontend
setTimeout(() => {
  const clientProcess = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5173'], {
    stdio: ['inherit', 'inherit', 'inherit'],
    cwd: path.join(__dirname, 'client'),
    env: { ...process.env }
  });

  clientProcess.on('error', (err) => {
    console.error('Frontend server error:', err);
  });
}, 2000);

serverProcess.on('error', (err) => {
  console.error('Backend server error:', err);
});

process.on('SIGINT', () => {
  console.log('\nShutting down development servers...');
  process.exit(0);
});