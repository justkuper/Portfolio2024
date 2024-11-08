import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: process.env.PORT || 3000, // Use the environment variable or default to 3000 for local
    host: '0.0.0.0',                 // Bind to all network interfaces
  },
});
