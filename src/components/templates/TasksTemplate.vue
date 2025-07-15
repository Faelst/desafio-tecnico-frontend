<template>
  <div class="max-w-10xl mx-auto min-h-screen bg-background-light">
    <HeaderBar />

    <div class="p-5">
      <Tabs
        :model-value="activeTab"
        @update:model-value="$emit('update:activeTab', $event)"
        :tabs="['Abertas', 'Finalizadas']"
      />

      <TasksPanel
        :search="search"
        @update:search="$emit('update:search', $event)"
        :filtered-tasks="filteredTasks"
      />
    </div>
  </div>
</template>

<script setup>
import HeaderBar from '@/components/organisms/HeaderBar.vue';
import Tabs from '@/components/molecules/Tabs.vue';
import TasksPanel from '@/components/organisms/TasksPanel.vue';

defineProps(['activeTab', 'search', 'filteredTasks']);
defineEmits(['update:activeTab', 'update:search']);
</script>
