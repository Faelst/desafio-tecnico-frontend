<template>
  <TasksTemplate
    :active-tab="activeTab"
    :search="search"
    :filtered-tasks="filteredTasks"
    @update:active-tab="activeTab = $event"
    @update:search="search = $event"
  />
</template>

<script setup lang="ts">
import { onBeforeMount, ref, computed, watch } from 'vue';
import TasksTemplate from '@/components/templates/TasksTemplate.vue';
import { fetchTasks } from '@/services/tasks';
import type { TaskResponse } from '@/types/task';

const activeTab = ref('Abertas');
const search = ref('');
const mockServerError = ref();
const mockServerResp = ref<TaskResponse>({
  data: [],
  first: 1,
  prev: null,
  next: null,
  last: 1,
  pages: 1,
});

const loadTasks = async () => {
  try {
    const statusFilter =
      activeTab.value === 'Finalizadas'
        ? ['finished', 'canceled']
        : ['pending', 'waiting'];

    mockServerResp.value = await await fetchTasks(statusFilter, search.value);
  } catch (e) {
    mockServerError.value = e;
  }
};

onBeforeMount(loadTasks);

watch(activeTab, loadTasks);

const filteredTasks = computed(() => {
  const tasks = mockServerResp.value?.data ?? [];
  const query = search.value.toLowerCase();

  return tasks.filter((task) => {
    return (
      task.str_automation_name.toLowerCase().includes(query) ||
      task.str_step_name.toLowerCase().includes(query) ||
      (task.str_step_label?.toLowerCase() ?? '').includes(query)
    );
  });
});
</script>
