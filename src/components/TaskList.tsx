import React from 'react';
import { Task } from '../types';
import { Trash2, ChevronDown, ChevronUp } from 'lucide-react';

interface TaskGroupProps {
  title: string;
  tasks: Task[];
  isCollapsed: boolean;
  onToggleCollapse: () => void;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function TaskGroup({
  title,
  tasks,
  isCollapsed,
  onToggleCollapse,
  onToggleTask,
  onDeleteTask,
}: TaskGroupProps) {
  return (
    <div className="mb-6">
      <button
        onClick={onToggleCollapse}
        className="flex items-center justify-between w-full p-3 bg-gray-50 rounded-lg mb-2"
      >
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        {isCollapsed ? <ChevronDown size={20} /> : <ChevronUp size={20} />}
      </button>

      {!isCollapsed && (
        <div className="space-y-2">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center justify-between p-4 bg-white border border-gray-200 rounded-lg hover:border-purple-200 transition-colors"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => onToggleTask(task.id)}
                  className="w-5 h-5 text-purple-600 rounded focus:ring-purple-500"
                />
                <div>
                  <span
                    className={`${
                      task.completed ? 'line-through text-gray-400' : 'text-gray-700'
                    }`}
                  >
                    {task.text}
                  </span>
                  {task.dueDate && (
                    <p className="text-sm text-gray-500">
                      Due: {task.dueDate.toLocaleDateString()}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span
                  className={`px-2 py-1 text-xs rounded ${
                    task.priority === 'high'
                      ? 'bg-red-100 text-red-700'
                      : task.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {task.priority}
                </span>
                <button
                  onClick={() => onDeleteTask(task.id)}
                  className="text-red-500 hover:text-red-600 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}