import { Bell, Search, UserCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-96">
        <Search size={18} className="text-gray-500" />
        <input 
          type="text" 
          placeholder="Search..." 
          className="bg-transparent border-none outline-none ml-2 w-full text-sm text-gray-700 placeholder-gray-500"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors relative">
          <Bell size={20} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div className="h-8 w-px bg-gray-200"></div>
        <button className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors">
          <UserCircle size={28} className="text-gray-400" />
          <span className="font-medium text-sm">Admin User</span>
        </button>
      </div>
    </header>
  );
}
