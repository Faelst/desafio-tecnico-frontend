export type Task = {
  id: string;
  str_automation_name: string;
  str_step_name: string;
  str_task_status: string;
  str_step_type: string;
  ts_created_at: string;
  ts_finished_at: string;
  str_step_label: string | null;
};

export type TaskResponse = {
  data: Task[];
  first: number;
  prev: number | null;
  next: number | null;
  last: number;
  pages: number;
};
