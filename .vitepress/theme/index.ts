// https://vitepress.dev/guide/custom-theme
import './style.css'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import CustomHero from './components/CustomHero.vue'
import FeatureCard from './components/FeatureCard.vue'
import UseCaseCard from './components/UseCaseCard.vue'
import UseStepCard from './components/UseStepCard.vue'
import DownloadLinks from './components/DownloadLinks.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-hero-image': () => h(CustomHero)  // 使用 h 函数渲染组件
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('HeroImage', CustomHero)
    app.component('UseStepCard', UseStepCard)
    app.component('FeatureCard', FeatureCard)
    app.component('UseCaseCard', UseCaseCard)
    app.component('DownloadLinks', DownloadLinks)
  }
} satisfies Theme
