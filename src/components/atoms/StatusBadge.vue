<template>
  <div
    :class="[
      'inline-flex items-center text-xs font-medium px-2 py-1 rounded-md',
      color,
    ]"
  >
    <img :src="icon" class="w-4 h-4 mr-1" alt="Ícone de status" />
    <span class="text-sm font-semibold">{{ label }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  icon: string;
  color: string;
}>();
</script>
