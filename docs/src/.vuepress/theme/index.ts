import { defaultTheme, type DefaultThemeOptions } from '@vuepress/theme-default'
import type { Theme } from 'vuepress/core'
import { getDirname, path } from 'vuepress/utils'

const __dirname = getDirname(import.meta.url)

export const childTheme = (options: DefaultThemeOptions): Theme => {
  return {
    name: 'vuepress-theme-child',
    extends: defaultTheme(options),

    // override component alias
    alias: {
      '@theme/VPPageMeta.vue': path.resolve(
        __dirname,
        './components/VPPageMeta.vue',
      ),
    },
  }
}