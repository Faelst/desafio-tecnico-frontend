<template>
  <div>
    <Tabs
      :model-value="activeTab"
      @update:model-value="$emit('update:activeTab', $event)"
      :tabs="['Abertas', 'Finalizadas']"
    />

    <div class="bg-white p-5">
      <div class="mb-5 bg-background-light p-5 rounded-lg shadow-sm">
        <h1 class="text-xl font-semibold text-font-dark m-1">
          Área de tarefas abertas
        </h1>
        <span class="text-font-light text-sm p-0 mt-0">
          Quando um fluxo iniciado por você ou por outra pessoa alcançar etapas
          sob sua responsabilidade, as tarefas serão exibidas aqui.
        </span>
      </div>

      <div class="bg-background-light mb-5 px-5 py-2 rounded-lg shadow-sm">
        <SearchBar
          :model-value="search"
          @update:model-value="$emit('update:search', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Tabs from '@/components/molecules/Tabs.vue';
import SearchBar from '@/components/molecules/SearchBar.vue';
import TaskCard from '@/components/TaskCard.vue';

defineProps(['activeTab', 'search', 'filteredTasks']);
defineEmits(['update:activeTab', 'update:search']);
</script>
