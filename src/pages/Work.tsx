import React, { useState } from 'react';
import { TaskInput } from '../components/TaskInput';
import { TaskGroup } from '../components/TaskList';
import { Task } from '../types';
import { Briefcase, Clock, Trophy } from 'lucide-react';

export function Work() {
  const [workTasks, setWorkTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Complete project presentation",
      completed: false,
      category: "Projects",
      priority: "high"
    },
    {
      id: 2,
      text: "Review team updates",
      completed: true,
      category: "Team",
      priority: "medium"
    },
    {
      id: 3,
      text: "Update documentation",
      completed: false,
      category: "Documentation",
      priority: "medium"
    }
  ]);

  const categories = ["Projects", "Team", "Documentation"];

  const toggleTask = (taskId: number) => {
    setWorkTasks(tasks => 
      tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Work Tasks</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
            <Trophy size={16} />
            <span>Productivity: 85%</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
            <Clock size={16} />
            <span>Time tracked: 6h 30m</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-purple-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-800">{category}</h2>
            </div>
            <div className="space-y-2">
              {workTasks
                .filter(task => task.category === category)
                .map(task => (
                  <div
                    key={task.id}
                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
                      {task.text}
                    </span>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>

      <TaskInput onAddTask={(text) => console.log('Add work task:', text)} />
    </div>
  );
}