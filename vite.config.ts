import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        solid(),
        VitePWA({
            manifest: {
                name: 'Emoji',
                short_name: 'Emoji',
                theme_color: '#f8fafc',
                background_color: '#f8fafc',
                display: 'standalone',
            },
        }),
    ],
});
