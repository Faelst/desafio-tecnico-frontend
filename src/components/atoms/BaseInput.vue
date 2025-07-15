<!-- src/components/atoms/BaseInput.vue -->
<template>
  <div class="relative w-full flex items-center">
    <div
      v-if="$slots.icon"
      :class="[
        'flex items-center pointer-events-none',
        'absolute left-3 top-1/2.1 transform -translate-y-1/2',
        'text-gray-400',
      ]"
    >
      <slot name="icon" />
    </div>

    <input
      :type="type"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      :placeholder="placeholder"
      :class="[
        'block w-full rounded text-sm outline-none transition',
        'pr-4 py-3',
        $slots.icon ? 'pl-11' : 'pl-4',
        'border border-gray-100',
        'placeholder-gray-300 text-font-dark',
        'focus:ring-1 focus:ring-blue-300 focus:border-blue-500',
        inputClass,
      ]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  modelValue: string;
  placeholder?: string;
  type?: string;
  inputClass?: string;
}>();

defineEmits(['update:modelValue']);
</script>
