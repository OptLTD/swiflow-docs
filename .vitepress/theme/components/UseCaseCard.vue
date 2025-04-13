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
      <div class="detail">
        <slot name="default"></slot>
      </div>
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
  transform: translateY(-5px);
  box-shadow: var(--vp-shadow-5);
  border-color: var(--vp-c-bg-soft);
}

.header{
  width: 100%;
  background-color: var(--vp-c-bg-soft);
}
.header>.query{
  padding: 0;
  margin: 15px 1rem;
  font-size: 0.85rem;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: -webkit-fill-available;
}

.title {
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: var(--vp-c-text-1);
  margin: 0 0;
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin: 0;
}
.detail{
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  --bg-opacity: 0.9;
  background-color: var(--vp-c-bg-soft);
}
</style>
