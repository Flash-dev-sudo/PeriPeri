import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

console.log('🚀 Starting Emparo Peri Peri development servers...');

// Start backend server
const backend = spawn('node', ['server/index.js'], {
  stdio: 'inherit',
  cwd: __dirname
});

// Start frontend server
const frontend = spawn('npx', ['vite', '--host', '0.0.0.0', '--port', '5173'], {
  stdio: 'inherit',
  cwd: join(__dirname, 'client')
});

// Handle cleanup
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down servers...');
  backend.kill();
  frontend.kill();
  process.exit(0);
});

backend.on('close', (code) => {
  console.log(`Backend process exited with code ${code}`);
  frontend.kill();
});

frontend.on('close', (code) => {
  console.log(`Frontend process exited with code ${code}`);
  backend.kill();
});