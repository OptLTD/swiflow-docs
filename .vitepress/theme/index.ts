// https://vitepress.dev/guide/custom-theme
import './style.css'
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import FeatureCard from './components/FeatureCard.vue'
import UseCaseCard from './components/UseCaseCard.vue'
import UseStepCard from './components/UseStepCard.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    app.component('UseStepCard', UseStepCard)
    app.component('FeatureCard', FeatureCard)
    app.component('UseCaseCard', UseCaseCard)
  }
} satisfies Theme
