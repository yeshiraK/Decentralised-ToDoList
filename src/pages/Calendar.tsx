import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Task } from '../types';
import { CalendarDays, Clock } from 'lucide-react';
import 'react-calendar/dist/Calendar.css';

export function CalendarPage() {
  const [date, setDate] = useState(new Date());
  
  const sampleTasks: Task[] = [
    {
      id: 1,
      text: "Team meeting",
      completed: false,
      category: "Work",
      priority: "high",
      dueDate: new Date()
    },
    {
      id: 2,
      text: "Project deadline",
      completed: false,
      category: "Work",
      priority: "high",
      dueDate: new Date()
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Calendar</h1>
        <div className="flex items-center gap-2 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
          <CalendarDays size={16} />
          <span>Tasks this month: 12</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
            <Calendar
              onChange={setDate}
              value={date}
              className="w-full"
              tileClassName="text-gray-800 hover:bg-purple-50"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">Tasks for {date.toLocaleDateString()}</h2>
            <div className="space-y-2">
              {sampleTasks.map(task => (
                <div
                  key={task.id}
                  className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={task.completed}
                      className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                    />
                    <span className={task.completed ? 'line-through text-gray-400' : 'text-gray-700'}>
                      {task.text}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={14} />
                    <span>2:00 PM</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}