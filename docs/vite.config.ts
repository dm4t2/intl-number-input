import { UserConfig } from 'vite'
import Components from 'vite-plugin-components'
import WindiCSS from 'vite-plugin-windicss'

const config: UserConfig = {
  plugins: [
    Components({
      dirs: ['.vitepress/theme/components'],
      customLoaderMatcher: (id) => id.endsWith('.md')
    }),
    WindiCSS()
  ]
}

export default config
