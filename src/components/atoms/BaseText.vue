<template>
  <span :class="[size, weight, color]">
    <slot />
  </span>
</template>

<script setup>
defineProps({
  size: { type: String, default: 'text-sm' },
  weight: { type: String, default: 'font-semibold' },
  color: { type: String, default: 'text-font-light' },
});
</script>
