// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0', // binds the server to 0.0.0.0
    port: process.env.PORT || 3000
  }
});
