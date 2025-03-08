import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListTodo, Briefcase, User, Calendar, Settings, Award } from 'lucide-react';
import { UserStats } from '../types';

interface SidebarProps {
  stats: UserStats;
}

export function Sidebar({ stats }: SidebarProps) {
  return (
    <div className="w-64 bg-white h-screen fixed left-0 top-0 border-r border-gray-200 p-4">
      <div className="flex items-center gap-2 mb-8">
        <ListTodo className="w-8 h-8 text-purple-600" />
        <h1 className="text-2xl font-bold text-gray-800">Taskio</h1>
      </div>

      <nav className="space-y-2">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <ListTodo size={20} />
          <span>All Tasks</span>
        </NavLink>
        <NavLink
          to="/personal"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <User size={20} />
          <span>Personal</span>
        </NavLink>
        <NavLink
          to="/work"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Briefcase size={20} />
          <span>Work</span>
        </NavLink>
        <NavLink
          to="/calendar"
          className={({ isActive }) =>
            `flex items-center gap-2 p-2 rounded-lg transition-colors ${
              isActive ? 'bg-purple-50 text-purple-600' : 'text-gray-600 hover:bg-gray-50'
            }`
          }
        >
          <Calendar size={20} />
          <span>Calendar</span>
        </NavLink>
      </nav>

      <div className="absolute bottom-8 left-4 right-4">
        <div className="bg-purple-50 rounded-lg p-4 mb-4">
          <div className="flex items-center gap-2 mb-2">
            <Award className="text-purple-600" size={20} />
            <h3 className="font-semibold text-gray-800">Your Stats</h3>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Tasks Today</span>
              <span className="font-semibold text-gray-800">{stats.tasksToday}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Coins Collected</span>
              <span className="font-semibold text-gray-800">{stats.coinsCollected}</span>
            </div>
            <div className="mt-2">
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Completion Rate</span>
                <span className="font-semibold text-gray-800">{stats.completionRate}%</span>
              </div>
              <div className="h-2 bg-purple-100 rounded-full">
                <div
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: `${stats.completionRate}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}