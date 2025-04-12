<script setup lang="ts">
defineProps({
  query: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="usecase-card">
    <div class="header">
      <h3 class="query">{{ query }}</h3>
    </div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
      <slot name="default"></slot>
    </div>
  </div>
</template>

<style scoped>
.usecase-card {
  overflow: hidden;
  background-color: var(--vp-c-bg);
  border-radius: 0.75rem;
  display: flex;
  align-items: flex-start;
  transition: all 0.2s ease;
  border: 1px solid var(--vp-c-divider);
  box-shadow: var(--vp-shadow-1);
  flex-direction: column;
}

.usecase-card:hover {
  transform: translateY(-2px);
  box-shadow: var(--vp-shadow-2);
  border-color: var(--vp-c-brand);
}

.header{
  width: 100%;
  background-color: var(--vp-c-bg-soft);
}
.header>.query{
  padding: 0;
  margin: 15px 25px;
  font-size: 0.85rem;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.5rem;
  gap: 1.5rem;
}

.title {
  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0;
}
</style>
