<script setup lang="ts">
defineProps({
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
  <div class="feature-card">
    <div class="icon-container">
      <slot name="icon" />
    </div>
    <h3 class="title">{{ title }}</h3>
    <p class="description">{{ description }}</p>
  </div>
</template>

<style scoped>
.feature-card {
  border: 1px solid var(--vp-c-divider);
  border-radius: 0.75rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  transition: all 0.2s ease;
}

.feature-card:hover {
  transform: scale(1.02);
  box-shadow: var(--vp-shadow-2);
}

.icon-container {
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  margin-bottom: 1rem;
  background-color: var(--vp-c-bg-soft);
}

.title {
  font-size: 1.5rem;
  line-height: 1.75rem;
  color: var(--vp-c-text-1);
  margin-bottom: 0.5rem;
}

.description {
  color: var(--vp-c-text-2);
  font-size: 0.875rem;
  line-height: 1.25rem;
  margin-bottom: 0px;
}
.title,.description{
  margin-top: 0px!important;
}

</style>