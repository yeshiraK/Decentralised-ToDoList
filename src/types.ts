export interface Task {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  dueDate?: Date;
  priority: 'low' | 'medium' | 'high';
}

export interface Category {
  id: string;
  name: string;
  tasks: number;
}

export interface UserStats {
  tasksToday: number;
  coinsCollected: number;
  completionRate: number;
}