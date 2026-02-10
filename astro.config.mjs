/*
 * @Author: Floppy
 * @LastEditors: Floppy
 * @Description: 
 */
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
    devToolbar: {
        enabled: false,
    },
    site: 'https://szbuye.github.io',
    // base: 'my-repo',
    integrations: [mdx(), sitemap(), vue()],
});