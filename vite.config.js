import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // Use the environment variable or default to 3000 for local
    host: true,                 // Bind to all network interfaces
  },
});
