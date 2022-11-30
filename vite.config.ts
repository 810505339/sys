/*
 * @Author: yxx
 * @Date: 2022-09-26 18:34:52
 * @LastEditTime: 2022-11-21 21:47:16
 * @LastEditors: yxx
 * @Description:
 * @FilePath: \project20221116\vite.config.ts
 */
/// <reference types="vitest" />

import path from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
export default defineConfig({

  server: {
    port: 8081,
    proxy: {
      '/api': {
        target: 'http://192.168.1.1/',
        changeOrigin: true,
      },
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      reactivityTransform: true,
    }),
    vueJsx({}),

    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        'vue-i18n',
        'vue/macros',
        'vue-router',
        '@vueuse/core',
        {
          'naive-ui': [
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar',
            'NConfigProvider',
            'GlobalThemeOverrides',
            'NButton',
          ],
        },
      ],
      dts: true,
      dirs: [
        './src/composables',
        'src/store',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/vite-plugin-components
    Components({
      dts: true,
      resolvers: [NaiveUiResolver()],
    }),

    // https://github.com/antfu/unocss
    // see unocss.config.ts for config
    Unocss(),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
