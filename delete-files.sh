
#!/bin/bash

# Remove React/TypeScript source files
rm -rf src/App.tsx
rm -rf src/main.tsx
rm -rf src/components
rm -rf src/pages
rm -rf src/hooks
rm -rf src/lib

# Remove configuration files
rm vite.config.ts
rm tsconfig.json
rm tsconfig.node.json
rm components.json

# Remove package management files
rm package.json
rm package-lock.json
rm bun.lockb

# Remove build-related configuration
rm postcss.config.js
rm eslint.config.js
