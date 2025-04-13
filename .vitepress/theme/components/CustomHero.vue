<script setup>
import UseCaseCard from './UseCaseCard.vue';
</script>

<template>
  <UseCaseCard 
    query="我需要一个简单的工具来学习新语言的单词" 
    title="语言学习卡片" 
    description="Swiflow生成一个语言学习工具，包括单词卡片、发音指导和学习进度追踪。">
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
      <div style="font-size: 0.75rem; font-weight: 500;">今日单词</div>
      <div style="font-size: 0.75rem;">12/20</div>
    </div>
    <div style="background-color: var(--vp-c-bg); padding: 0.5rem; border-radius: 0.375rem; margin-bottom: 0.5rem; text-align: center;">
      <div style="font-weight: 500;">Bonjour</div>
      <div style="font-size: 0.75rem; color: var(--vp-c-text-2);">你好</div>
    </div>
    <div style="display: flex; justify-content: center; gap: 0.5rem;">
      <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--vp-c-brand);"></div>
      <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--vp-c-bg-soft);"></div>
      <div style="width: 0.5rem; height: 0.5rem; border-radius: 9999px; background-color: var(--vp-c-bg-soft);"></div>
    </div>
  </UseCaseCard>
</template>

<style scoped>
.custom-hero {
  padding: 4rem 0;
  text-align: center;
}

.custom-hero-image {
  margin: 2rem auto;
  max-width: 100%;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.action {
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
}

.action.primary {
  background-color: var(--vp-c-brand);
  color: white;
}

.action.secondary {
  border: 1px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
}
</style>