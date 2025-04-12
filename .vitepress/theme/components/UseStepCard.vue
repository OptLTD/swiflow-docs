<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  step: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="step-card">
    <div class="step-number">{{ step }}</div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.step-card {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg-soft);
  transition: all 0.2s ease;
}

.step-card:hover {
  background-color: var(--vp-c-bg-soft-up);
}

.step-number {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--vp-c-brand-soft);
  color: var(--vp-c-brand);
  border-radius: 9999px;
  font-weight: 600;
  flex-shrink: 0;
}

.content {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.title {
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.25rem;
}
</style>
