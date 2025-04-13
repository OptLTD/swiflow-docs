<script setup>
import { ref, computed, onMounted } from 'vue'
import { GIT_REPO_NAME } from '../../consts.ts'
import { GIT_REPO_OWNER } from '../../consts.ts'

const props = defineProps({
  owner: String,
  repo: String
})

const winX86Addr  = ref('')
const macAarchAddr = ref('')
const macInterAddr = ref('')
const releaseAddr = computed(() => {
  const repoName = props.name || GIT_REPO_NAME
  const repoOwner = props.owner || GIT_REPO_OWNER
  return `https://api.github.com/repos/${repoOwner}/${repoName}/releases`
})

onMounted(async () => {
  fetch(releaseAddr.value).then(resp => resp.json()).then((resp) => {
    if (!resp?.length || !resp[0]?.assets) {
      return 
    }
    const assets = resp[0].assets
    for (var item of resp[0].assets) {
      const url = item.browser_download_url
      if (url.endsWith('_x64.dmg')) {
        macInterAddr.value = url
      }
      if (url.endsWith('_aarch64.dmg')) {
        macAarchAddr.value = url
      }
      if (url.endsWith('windows.exe')) {
        winX86Addr.value = url
      }
    }
  }).catch((error) => {
    console.error('Failed to fetch releases:', error)
  })
})
</script>

<template>
  <div class="download-buttons">
    <a :href="macInterAddr || releaseAddr" class="vp-button medium brand">macOS版(Intel芯片)</a>
    <a :href="macAarchAddr || releaseAddr" class="vp-button medium brand">macOS版(Apple芯片)</a>
    <a :href="winX86Addr || releaseAddr" class="vp-button medium brand">Windows版</a>
    <!-- <a :href="releaseAddr" class="vp-button medium brand">网页版</a> -->
  </div>
</template>

<style scoped>
.github-releases {
  margin: 20px 0;
}
.release {
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eaecef;
}
.assets {
  margin: 16px 0;
}
</style>