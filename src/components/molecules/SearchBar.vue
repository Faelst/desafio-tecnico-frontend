<template>
  <BaseInput
    :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)"
    placeholder="Busque por nome do fluxo, nome da etapa ou etiqueta"
  >
    <template #icon>
      <svg
        class="w-6 h-6 text-blue-500"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 103 10.5a7.5 7.5 0 0013.15 6.15z"
        />
      </svg>
    </template>
  </BaseInput>
</template>

<script setup lang="ts">
import BaseInput from '@/components/atoms/BaseInput.vue';

defineProps<{
  modelValue: string;
  placeholder?: string;
  type?: string;
  inputClass?: string;
}>();

defineEmits(['update:modelValue']);
</script>
