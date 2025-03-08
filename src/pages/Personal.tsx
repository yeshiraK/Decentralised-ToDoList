import React, { useState } from 'react';
import { TaskInput } from '../components/TaskInput';
import { TaskGroup } from '../components/TaskList';
import { Task } from '../types';
import { Clock, Target, Heart } from 'lucide-react';

export function Personal() {
  const [personalTasks, setPersonalTasks] = useState<Task[]>([
    {
      id: 1,
      text: "Morning workout routine",
      completed: false,
      category: "Health",
      priority: "high"
    },
    {
      id: 2,
      text: "Read 30 minutes",
      completed: true,
      category: "Self-improvement",
      priority: "medium"
    },
    {
      id: 3,
      text: "Plan weekend activities",
      completed: false,
      category: "Leisure",
      priority: "low"
    }
  ]);

  const categories = ["Health", "Self-improvement", "Leisure"];

  const toggleTask = (taskId: number) => {
    setPersonalTasks(tasks => 
      tasks.map(task => 
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Personal Tasks</h1>
        <div className="flex gap-4">
          <div className="flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-full">
            <Target size={16} />
            <span>Goals: 3/5</span>
          </div>
          <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
            <Clock size={16} />
            <span>Streak: 5 days</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category} className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="text-purple-600" size={20} />
              <h2 className="text-lg font-semibold text-gray-800">{category}</h2>
            </div>
            <div className="space-y-2">
              {personalTasks
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

      <TaskInput onAddTask={(text) => console.log('Add personal task:', text)} />
    </div>
  );
}