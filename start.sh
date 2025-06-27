#!/bin/bash

echo "Starting Emparo Peri Peri Restaurant Website..."

# Start backend server in background
node server/index.js &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 2

# Start frontend server
cd client && npx vite --host 0.0.0.0 --port 5173 &
FRONTEND_PID=$!

# Wait for both processes
wait $BACKEND_PID $FRONTEND_PID