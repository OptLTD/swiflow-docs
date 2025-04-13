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
  number: {
    type: Number,
    required: true
  }
})
</script>

<template>
  <div class="step-card">
    <div class="step-number">{{ number }}</div>
    <div class="content">
      <h3 class="title">{{ title }}</h3>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
.step-card {
  display: flex;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background-color: var(--vp-c-bg);
  transition: all 0.2s ease;
}

.step-card:hover {
  background-color: var(--vp-c-bg);
}

.step-number {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vp-c-neutral-inverse);
  background-color: var(--vp-c-neutral);
  border-radius: 9999px;
  flex-shrink: 0;
  margin-bottom: 0;
}

.content {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 1.5rem;
  color: var(--vp-c-text-1);
  margin: 1.5rem 0;
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  margin: 0rem 0;
}
</style>
