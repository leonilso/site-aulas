import React from 'react';
import { FileSearch } from 'lucide-react';

const EmptyState = () => (
  <div className="flex flex-col items-center justify-center py-20 text-center">
    <div className="bg-slate-100 p-4 rounded-full mb-4">
      <FileSearch size={48} className="text-slate-400" />
    </div>
    <h3 className="text-lg font-semibold text-slate-800">Nenhum plano encontrado</h3>
    <p className="text-slate-500 max-w-sm mt-2">
      Tente ajustar os filtros ou pesquisar por outro termo para encontrar o que você precisa.
    </p>
  </div>
);

export default EmptyState;