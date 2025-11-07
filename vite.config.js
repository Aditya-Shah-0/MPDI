import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],  
  build: {
    chunkSizeWarningLimit: 1000, // <-- Set this to a larger value (in kB)
  },
});