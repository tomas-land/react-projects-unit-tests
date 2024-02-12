/// <reference types="vitest" />
/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';


// const aliases = {
//   '@/*': '/src/*',
//   // '@utils': '/src/utils',
//   // Add more aliases as needed
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test:{
    globals:true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts'
    },
    // resolve: {
    //   alias: aliases,
    // },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'), // Main alias for src directory
        // '@/hooks': path.resolve(__dirname, './src/hooks'), // Specific alias for hooks
        // '@/components': path.resolve(__dirname, './src/components'), // Another example
      },
    },
})
