#!/bin/bash
echo "Starting Emparo Peri Peri Restaurant Website..."
echo "Backend: http://localhost:3000"
echo "Frontend: http://localhost:5173"

# Start backend server in background
NODE_ENV=development node server/index.js &
BACKEND_PID=$!

# Wait for backend to start
sleep 3

# Start frontend server
cd client && npx vite --host 0.0.0.0 --port 5173 &
FRONTEND_PID=$!

# Handle cleanup on exit
trap "kill $BACKEND_PID $FRONTEND_PID 2>/dev/null" EXIT

# Keep script running
wait