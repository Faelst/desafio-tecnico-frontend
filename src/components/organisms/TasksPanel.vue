<template>
  <div class="bg-white">
    <div class="py-5 px-10">
      <TasksHeader />

      <div class="bg-background-light mb-5 px-5 py-2 rounded-lg shadow-sm">
        <SearchBar
          :model-value="search"
          @update:model-value="$emit('update:search', $event)"
        />
      </div>

      <div class="flex justify-end items-end">
        <span>{{ filteredTasks.length }}</span>
        <span class="ml-1 text-gray-500">tarefas</span>
      </div>

      <div v-if="filteredTasks.length === 0" class="text-gray-500 text-sm">
        Nenhuma tarefa encontrada.
      </div>
    </div>

    <div class="px-5">
      <TaskCard v-for="task in filteredTasks" :key="task.id" :task="task" />
    </div>
  </div>
</template>

<script setup lang="ts">
import TasksHeader from '@/components/organisms/TasksHeader.vue';
import SearchBar from '@/components/molecules/SearchBar.vue';
import TaskCard from '@/components/organisms/TaskCard.vue';

import type { Task } from '@/types/task';

const props = defineProps<{
  search: string;
  filteredTasks: Task[];
}>();

const emit = defineEmits<{
  (e: 'update:search', value: string): void;
}>();
</script>
