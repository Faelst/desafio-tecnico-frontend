<template>
  <div class="flex border-b">
    <button
      v-for="tab in tabs"
      :key="tab"
      @click="$emit('update:modelValue', tab)"
      :class="[
        'px-6 py-2 text-sm font-medium font-semibold bg-white border-gray-100',
        modelValue === tab
          ? 'border-b-3 border-b-blue-light text-blue-light border-t-0 border-r-0 border-l-0 rounded-tl'
          : 'text-gray-500 border-0 rounded-tr',
      ]"
    >
      {{ tab }}
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  tabs: string[];
}>();

defineEmits(['update:modelValue']);
</script>
