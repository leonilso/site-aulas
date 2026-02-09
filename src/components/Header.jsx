import React from 'react';
import { BookOpen } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-6 py-4 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg text-white">
            <BookOpen size={24} />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800">EduPlanner</h1>
            <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Visualizador de Aulas</p>
          </div>
        </div>
        <div className="hidden md:block text-sm text-slate-500">
          v1.0.0
        </div>
      </div>
    </header>
  );
};

export default Header;