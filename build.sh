#!/bin/bash
set -e

echo "Building Emparo Peri Peri for production..."

# Install client dependencies
cd client
npm install
npm run build
cd ..

echo "Build completed successfully!"