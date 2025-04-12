import DefaultTheme from "vitepress/theme"
import "./custom.css"
import FeatureCard from "./components/FeatureCard.vue"
import StepCard from "./components/StepCard.vue"
import UseCaseCard from "./components/UseCaseCard.vue"

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("FeatureCard", FeatureCard)
    app.component("StepCard", StepCard)
    app.component("UseCaseCard", UseCaseCard)
  },
}
