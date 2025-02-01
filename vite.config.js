import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    // root: 'portfolio', // Set the root to the portfolio folder
    plugins: [react()],
    // base:"shravani-portfolio", 
    server: {
        open: true, // Automatically open the browser
        base: './', 
    },
});
