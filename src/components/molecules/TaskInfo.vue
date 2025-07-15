<template>
  <div>
    <Label>Fluxo</Label>
    <p class="font-semibold text-font-dark truncate">{{ automationName }}</p>

    <Label>Nome da etapa</Label>
    <p class="font-semibold text-font-dark truncate">{{ stepName }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  automationName: string;
  stepName: string;
}>();
</script>
