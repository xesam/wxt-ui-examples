import { defineConfig } from 'wxt';
import pkg from './package.json';

export default defineConfig({
    vite: () => ({
        plugins: []
    }),
    modules: ['@wxt-dev/module-react'],
    manifest: {
        name: '__MSG_extName__',
        description: '__MSG_extDescription__',
        version: pkg.version,
        default_locale: 'en',
        permissions: ['storage'],
        action: {}
    }
});
