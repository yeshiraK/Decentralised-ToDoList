import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListTodo, CheckCircle2, Zap, Shield } from 'lucide-react';

export function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <ListTodo className="w-8 h-8 text-purple-600" />
          <span className="text-2xl font-bold text-gray-800">Taskio</span>
        </div>
        <button
          onClick={() => navigate('/app')}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Try it Free
        </button>
      </nav>

      <main className="container mx-auto px-6 pt-20 pb-16">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Your All-in-One
            <br />
            Task Management Solution
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Seamlessly manage your tasks across mobile and desktop with a powerful
            dashboard and intuitive decentralized app.
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate('/app')}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors text-lg"
            >
              Get Started For Free
            </button>
            <button className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-50 transition-colors text-lg border border-gray-200">
              Learn More →
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <img
              src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80"
              alt="App Screenshot"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-[600px]">
          {[
            {
              icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />,
              title: 'Easy Task Management',
              description: 'Organize and track your tasks with our intuitive interface'
            },
            {
              icon: <Shield className="w-8 h-8 text-purple-600" />,
              title: 'Decentralized Security',
              description: 'Your data is secure and private with blockchain technology'
            },
            {
              icon: <Zap className="w-8 h-8 text-purple-600" />,
              title: 'Instant Updates',
              description: 'Real-time synchronization across all your devices'
            }
          ].map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              {feature.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}