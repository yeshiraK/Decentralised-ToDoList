import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TaskGroup } from './components/TaskList';
import { TaskInput } from './components/TaskInput';
import { Personal } from './pages/Personal';
import { Work } from './pages/Work';
import { CalendarPage } from './pages/Calendar';
import { Landing } from './pages/Landing';
import { Task, UserStats } from './types';

function App() {
  const [isConnected, setIsConnected] = useState(false);
  const [account, setAccount] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTasks, setFilteredTasks] = useState<Task[]>([]);

  const stats: UserStats = {
    tasksToday: tasks.length,
    coinsCollected: 25982,
    completionRate: 75,
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  useEffect(() => {
    const filtered = tasks.filter(task =>
      task.text.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTasks(filtered);
  }, [searchQuery, tasks]);

  const checkIfWalletIsConnected = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ method: 'eth_accounts' });
        if (accounts.length > 0) {
          setIsConnected(true);
          setAccount(accounts[0]);
        }
      }
    } catch (error) {
      console.error('Error checking wallet connection:', error);
    }
  };

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        toast.error('Please install MetaMask!');
        return;
      }

      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setIsConnected(true);
      setAccount(accounts[0]);
      toast.success('Wallet connected successfully!');
    } catch (error) {
      console.error('Error connecting wallet:', error);
      toast.error('Failed to connect wallet');
    }
  };

  const addTask = (text: string) => {
    const task: Task = {
      id: Date.now(),
      text,
      completed: false,
      category: 'Today',
      priority: 'medium',
    };
    setTasks([...tasks, task]);
    toast.success('Task added successfully!');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
    toast.success('Task status updated!');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
    toast.success('Task deleted successfully!');
  };

  const tasksByCategory = (searchQuery ? filteredTasks : tasks).reduce((acc, task) => {
    if (!acc[task.category]) {
      acc[task.category] = [];
    }
    acc[task.category].push(task);
    return acc;
  }, {} as Record<string, Task[]>);

  function AppLayout({ children }: { children: React.ReactNode }) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <Sidebar stats={stats} />
        <Header
          isConnected={isConnected}
          account={account}
          onConnect={connectWallet}
          onSearch={setSearchQuery}
        />
        <main className="ml-64 pt-16 p-6">
          <div className="max-w-4xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/app"
          element={
            <AppLayout>
              <TaskInput onAddTask={addTask} />
              {Object.entries(tasksByCategory).map(([category, categoryTasks]) => (
                <TaskGroup
                  key={category}
                  title={category}
                  tasks={categoryTasks}
                  onToggleTask={toggleTask}
                  onDeleteTask={deleteTask}
                />
              ))}
            </AppLayout>
          }
        />
        <Route
          path="/personal"
          element={
            <AppLayout>
              <Personal />
            </AppLayout>
          }
        />
        <Route
          path="/work"
          element={
            <AppLayout>
              <Work />
            </AppLayout>
          }
        />
        <Route
          path="/calendar"
          element={
            <AppLayout>
              <CalendarPage />
            </AppLayout>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;