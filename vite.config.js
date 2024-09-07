import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '192.168.1.15', // Accept connections from any IP address
    port: 3000, // You can specify a different port if needed
  },
});
