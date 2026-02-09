import React from 'react';
import { Search, GraduationCap, User, Calendar, Building, Layers, Bookmark } from 'lucide-react';
import FiltroSelect from './FiltroSelect';
import { getUniqueValues } from '../utils/filters';

const Filtros = ({ data, filters, setFilters, searchTerm, setSearchTerm }) => {
  // Extrai opções únicas dinamicamente do JSON
  const instituicoes = getUniqueValues(data, 'instituicao');
  const professores = getUniqueValues(data, 'professor');
  const series = getUniqueValues(data, 'serie');
  const trimestres = getUniqueValues(data, 'trimestre');

  const handleChange = (field, value) => {
    setFilters(prev => ({ ...prev, [field]: value }));
  };

  return (
    <aside className="w-full md:w-80 flex-shrink-0 bg-white p-6 md:h-[calc(100vh-80px)] md:sticky md:top-20 md:overflow-y-auto border-r border-slate-200">
      <div className="space-y-6">
        <div>
          <h2 className="text-lg font-bold text-slate-800 mb-4">Filtrar Planos</h2>
          
          {/* Busca Livre */}
          <div className="relative mb-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={16} className="text-slate-400" />
            </div>
            <input
              type="text"
              className="block w-full p-2.5 pl-10 text-sm text-slate-900 border border-slate-300 rounded-lg bg-slate-50 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              placeholder="Buscar por tema, objetivo..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="space-y-4">
          <FiltroSelect 
            label="Instituição" 
            icon={Building}
            options={instituicoes} 
            value={filters.instituicao} 
            onChange={(val) => handleChange('instituicao', val)} 
          />
          <FiltroSelect 
            label="Professor" 
            icon={User}
            options={professores} 
            value={filters.professor} 
            onChange={(val) => handleChange('professor', val)} 
          />
          <FiltroSelect 
            label="Série/Ano" 
            icon={GraduationCap}
            options={series} 
            value={filters.serie} 
            onChange={(val) => handleChange('serie', val)} 
          />
          <FiltroSelect 
            label="Trimestre" 
            icon={Layers}
            options={trimestres} 
            value={filters.trimestre} 
            onChange={(val) => handleChange('trimestre', val)} 
          />
          
          {/* Reset Button */}
          {(searchTerm || Object.values(filters).some(Boolean)) && (
            <button
              onClick={() => {
                setFilters({ instituicao: '', professor: '', serie: '', turma: '', data: '', trimestre: '' });
                setSearchTerm('');
              }}
              className="w-full mt-4 py-2 px-4 text-sm font-medium text-red-600 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              Limpar Filtros
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Filtros;