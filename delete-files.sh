
#!/bin/bash

echo "Starting deletion of React files..."

# Remove React/TypeScript source files
echo "Removing React/TypeScript source files..."
rm -rf src/App.tsx
rm -rf src/main.tsx
rm -rf src/components
rm -rf src/pages
rm -rf src/hooks
rm -rf src/lib

# Remove configuration files
echo "Removing configuration files..."
rm -f vite.config.ts
rm -f tsconfig.json
rm -f tsconfig.node.json
rm -f components.json

# Remove package management files
echo "Removing package management files..."
rm -f package.json
rm -f package-lock.json
rm -f bun.lockb

# Remove build-related configuration
echo "Removing build-related configuration..."
rm -f postcss.config.js
rm -f eslint.config.js

echo "React files deletion completed!"
