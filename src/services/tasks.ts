import api from '@/lib/api';

export const fetchTasks = async (
  status: string[],
  search = '',
  page = 1,
  // Quantidade de Objs no mock
  perPage = 300
) => {
  const params: Record<string, any> = {
    _page: page,
    _per_page: perPage,
  };

  const response = await api.get('/tasks', {
    params,
  });

  // 🔴 O json-server não suporta múltiplos parâmetros repetidos como str_task_status=pending&str_task_status=waiting.
  // Portanto, filtramos os dados manualmente.
  const tasks = Array.isArray(response.data)
    ? response.data
    : response.data.data;

  const query = search.toLowerCase();

  // O correto é filtrar os dados com base no status e na pesquisa.
  // Aqui, filtramos os dados já recebidos do servidor.
  // Isso é necessário porque o json-server não suporta múltiplos parâmetros repetidos.
  // Portanto, filtramos os dados manualmente.
  // Isso é uma limitação do json-server, não do Vue ou do Axios.
  const filtered = tasks.filter((task: any) => {
    const matchesStatus = status.includes(task.str_task_status);
    const matchesSearch =
      task.str_automation_name.toLowerCase().includes(query) ||
      task.str_step_name.toLowerCase().includes(query) ||
      (task.str_step_label?.toLowerCase() ?? '').includes(query);

    return matchesStatus && matchesSearch;
  });

  return {
    ...response.data,
    data: filtered,
  };
};
