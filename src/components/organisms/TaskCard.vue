<template>
  <div
    class="flex justify-between items-center gap-4 p-4 mb-4 bg-background-light border border-gray-200 rounded-lg shadow-sm"
  >
    <div class="flex flex-col items-center">
      <div
        class="bg-[#E2E8F0] rounded-md flex flex-col items-center justify-center text-blue-600 font-bold text-xs px-4 py-2"
      >
        ID
        <span class="text-font-dark">{{ task.id }}</span>
      </div>
    </div>

    <div class="flex-1 grid grid-cols-5 gap-4">
      <div class="col-span-2">
        <p class="text-xs text-font-light mb-0">Fluxo</p>
        <p class="font-semibold text-font-dark truncate mt-0">
          {{ task.str_automation_name }}
        </p>

        <p class="text-xs text-font-light mb-0">Nome da etapa</p>
        <p class="font-semibold text-font-dark truncate mt-0">
          {{ task.str_step_name }}
        </p>
      </div>

      <div class="flex flex-col justify-between">
        <div>
          <p class="text-xs text-font-light mb-0">Status da tarefa</p>
          <div
            class="inline-flex items-center text-xs font-medium px-2 py-1 rounded-md mt-0"
            :class="formattedStatus.color"
          >
            <img
              :src="formattedStatus.icon"
              class="w-4 h-4 mr-1"
              alt="Ícone de status"
            />
            <span class="text-sm font-semibold">{{
              formattedStatus.label
            }}</span>
          </div>
        </div>

        <div>
          <div class="flex items-center gap-1 mb-0">
            <img src="@/assets/svgs/type.svg" class="w-3 mt-3" alt="Etiqueta" />
            <p class="text-xs text-font-light mb-0">Tipo</p>
          </div>
          <p class="font-semibold text-font-dark mt-0">
            {{ task.str_step_type }}
          </p>
        </div>
      </div>

      <div>
        <div class="flex items-center gap-1 mb-0">
          <img
            src="@/assets/svgs/timer-task.svg"
            class="w-3 mt-3"
            alt="Etiqueta"
          />
          <p class="text-xs text-font-light mb-0">Tarefa disponível desde</p>
        </div>
        <p class="text-font-dark text-sm font-medium mt-0">
          {{ formattedDate }}
        </p>

        <div class="flex items-center gap-1 mb-0">
          <img src="@/assets/svgs/tag.svg" class="w-3 mt-3" alt="Etiqueta" />
          <p class="text-xs text-font-light mb-0">Etiqueta</p>
        </div>
        <p
          class="font-semibold text-sm truncate mt-0"
          :class="task.str_step_label ? 'text-font-dark' : 'text-font-disabled'"
        >
          {{ task.str_step_label || 'Sem etiqueta' }}
        </p>
      </div>

      <div class="flex flex-col justify-center items-end">
        <div class="flex gap-2 mt-2">
          <button
            class="border-0 text-sm font-semibold px-4 py-1.5 rounded-md bg-[#FEF3C7] text-yellow-800 hover:brightness-95"
          >
            Assumir
          </button>
          <button
            class="border-1 text-sm font-semibold px-4 py-1.5 rounded-md border-gray-100 text-gray-700 hover:bg-gray-50 bg-background-light hover:brightness-95"
          >
            Visualizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import TagIcon from '@/assets/svgs/tag.svg?component';
import { computed } from 'vue';

const props = defineProps<{
  task: {
    id: string | number;
    str_automation_name: string;
    str_step_name: string;
    str_task_status: 'waiting' | 'canceled' | 'finished' | 'pending';
    str_step_type: string;
    str_step_label?: string | null;
    ts_created_at: string;
  };
}>();

const formattedDate = computed(() => {
  const date = new Date(props.task.ts_created_at);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = String(date.getFullYear()).slice(2);
  const hours = String(date.getHours()).padStart(2, '0');
  const mins = String(date.getMinutes()).padStart(2, '0');

  return `${day}/${month}/${year} - ${hours}:${mins}h`;
});

const statusMap = {
  waiting: {
    label: 'Aguardando',
    color: 'bg-yellow-100 text-yellow-600 rounded-full',
    icon: 'src/assets/svgs/timer.svg',
  },
  canceled: {
    label: 'Cancelada',
    color: 'bg-red-100 text-red-600 rounded-full',
    icon: 'src/assets/svgs/warning.svg',
  },
  finished: {
    label: 'Preenchida',
    color: 'bg-blue-100 text-blue-600 rounded-full',
    icon: 'src/assets/svgs/checked.svg',
  },
  pending: {
    label: 'Pendente',
    color: 'bg-orange-100 text-orange-600 rounded-full',
    icon: 'src/assets/svgs/user-cancek.svg',
  },
};

const formattedStatus = computed(() => {
  return (
    statusMap[props.task.str_task_status] || {
      label: props.task.str_task_status,
      color: 'bg-gray-100 text-gray-600',
      icon: '❔',
    }
  );
});
</script>
