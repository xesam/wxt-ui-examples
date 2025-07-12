import { defineConfig } from 'wxt';
import tailwindcss from "@tailwindcss/vite";

// See https://wxt.dev/api/config.html
export default defineConfig({
    vite: () => ({
        plugins: [
            tailwindcss(),
        ],
    }),
    modules: ['@wxt-dev/module-react'],
    manifest: {
        name: '__MSG_extName__',
        description: '__MSG_extDescription__',
        default_locale: 'en'
        // permissions: ['sidePanel', 'contextMenus', 'storage', 'downloads'],
    }
});
