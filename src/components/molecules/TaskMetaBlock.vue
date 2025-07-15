<template>
  <div>
    <slot name="label" />
    <p :class="['font-semibold truncate mt-0', textClass]">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{ textClass?: string }>();
</script>
