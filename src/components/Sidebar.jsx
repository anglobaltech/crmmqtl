"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Home, Users, Settings, FolderOpen, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`bg-white border-r border-gray-200 flex flex-col h-screen sticky top-0 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      <div className="h-16 flex items-center justify-between border-b border-gray-200 px-4 py-2 relative">
        {!isCollapsed && (
          <div className="flex-1 overflow-hidden mr-2">
            <Image
              src="/mqtl-logo.png"
              alt="MQT Laboratory Logo"
              width={220}
              height={55}
              className="object-contain object-left w-full h-full"
            />
          </div>
        )}
        
        <button 
          onClick={() => setIsCollapsed(!isCollapsed)}
          className={`p-1.5 rounded-lg bg-gray-50 border border-gray-200 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors ${isCollapsed ? 'mx-auto' : ''}`}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-hidden">
        <Link href="/" className={`flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg p-3 transition-colors ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <Home size={20} className="min-w-[20px]" />
          {!isCollapsed && <span className="font-medium whitespace-nowrap">Dashboard</span>}
        </Link>
        <Link href="#" className={`flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg p-3 transition-colors ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <Users size={20} className="min-w-[20px]" />
          {!isCollapsed && <span className="font-medium whitespace-nowrap">Clients</span>}
        </Link>    
        <Link href="#" className={`flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg p-3 transition-colors ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <FolderOpen size={20} className="min-w-[20px]" />
          {!isCollapsed && <span className="font-medium whitespace-nowrap">Projects</span>}
        </Link>
        <Link href="#" className={`flex items-center text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg p-3 transition-colors ${isCollapsed ? 'justify-center' : 'space-x-3'}`}>
          <Settings size={20} className="min-w-[20px]" />
          {!isCollapsed && <span className="font-medium whitespace-nowrap">Settings</span>}
        </Link>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className={`text-sm text-gray-500 text-center whitespace-nowrap ${isCollapsed ? 'hidden' : 'block'}`}>
          &copy; 2026 MQT Lab
        </div>
      </div>
    </div>
  );
}
