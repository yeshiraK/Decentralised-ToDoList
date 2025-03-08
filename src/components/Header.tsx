import React from 'react';
import { Wallet, Search } from 'lucide-react';
import { toast } from 'react-hot-toast';

interface HeaderProps {
  isConnected: boolean;
  account: string;
  onConnect: () => Promise<void>;
  onSearch: (query: string) => void;
}

export function Header({ isConnected, account, onConnect, onSearch }: HeaderProps) {
  return (
    <header className="fixed top-0 right-0 left-64 h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between z-10">
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search tasks..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        {!isConnected ? (
          <button
            onClick={onConnect}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Wallet size={20} />
            Connect Wallet
          </button>
        ) : (
          <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 px-4 py-2 rounded-lg">
            <Wallet className="text-green-500" size={20} />
            {`${account.slice(0, 6)}...${account.slice(-4)}`}
          </div>
        )}
      </div>
    </header>
  );
}