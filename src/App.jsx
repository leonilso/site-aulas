import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Filtros from './components/Filtros';
import PlanosList from './components/PlanosList';
import planosData from './data/planos.json';
import { filterPlans } from './utils/filters';

function App() {
  // Estado para os filtros
  const [filters, setFilters] = useState({
    instituicao: '',
    professor: '',
    serie: '',
    turma: '',
    trimestre: '',
    data: ''
  });

  // Estado para busca livre
  const [searchTerm, setSearchTerm] = useState('');

  // Lógica de filtragem otimizada
  // Só recalcula se filters, searchTerm ou data mudarem
  const filteredPlanos = useMemo(() => {
    return filterPlans(planosData, filters, searchTerm);
  }, [filters, searchTerm]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />

      <main className="flex flex-col md:flex-row max-w-7xl mx-auto w-full flex-1">
        {/* Sidebar de Filtros */}
        <Filtros 
          data={planosData}
          filters={filters}
          setFilters={setFilters}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        {/* Área de Conteúdo */}
        <section className="flex-1 p-6 md:p-8 overflow-y-auto">
          <PlanosList planos={filteredPlanos} />
        </section>
      </main>
    </div>
  );
}

export default App;