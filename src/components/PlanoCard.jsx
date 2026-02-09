import React, { useState } from 'react';
import { parseISO, format } from "date-fns";
import { ChevronDown, ChevronUp, Calendar, Clock, Copy, CheckCircle } from 'lucide-react';

const PlanoCard = ({ plano }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (e) => {
    e.stopPropagation();
    const text = `Plano de Aula: ${plano.temas.join(', ')}\nProfessor: ${plano.professor}\nData: ${plano.data}\n\nObjetivos:\n${plano.objetivosGerais}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md ${isOpen ? 'ring-2 ring-indigo-500/20' : ''}`}
    >
      {/* Cabeçalho do Card (Clicável) */}
      <div 
        className="p-5 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-2.5 py-0.5 rounded-full">
              {plano.trimestre} Trim
            </span>
            <span className="text-slate-500 text-xs font-medium flex items-center gap-1">
              <Calendar size={12} />
              {format(parseISO(plano.data), "dd/MM/yyyy")}
            </span>
            <span className="text-slate-500 text-xs font-medium flex items-center gap-1">
              {plano.materia}
            </span>
          </div>
          
          <h3 className="text-lg font-bold text-slate-800 mb-1">
            {plano.temas.join(' & ')}
          </h3>
          
          <p className="text-sm text-slate-600">
            {plano.professor} • <span className="font-medium text-slate-800">{plano.serie}</span>
          </p>
        </div>

        <div className="flex items-center gap-3">
            <button 
                onClick={handleCopy}
                className="p-2 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-full transition-colors"
                title="Copiar resumo"
            >
                {copied ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
            </button>
            <div className={`p-2 bg-slate-50 rounded-full text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-indigo-50 text-indigo-600' : ''}`}>
                <ChevronDown size={20} />
            </div>
        </div>
      </div>

      {/* Conteúdo Expansível */}
      {isOpen && (
        <div className="px-5 pb-5 pt-0 border-t border-slate-100 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            <div className="space-y-4">
              <Section title="Objetivos Gerais">
                <p>{plano.objetivosGerais}</p>
              </Section>
              
              <Section title="Procedimento Metodológico">
                <p className="whitespace-pre-line">{plano.procedimentoMetodologico}</p>
              </Section>
            </div>

            <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 text-sm text-slate-700 mb-2">
                    <Clock size={16} className="text-indigo-500" />
                    <span className="font-semibold">Duração:</span> {plano.duracao}
                </div>
                
                <Section title="Metodologias">
                    <p>{plano.metodologias}</p>
                </Section>

                <Section title="Materiais">
                    <ul className="list-disc list-inside">
                        {plano.materiaisNecessarios.map((m, i) => <li key={i}>{m}</li>)}
                    </ul>
                </Section>

                <Section title="Avaliação">
                    <p>{plano.avaliacaoAprendizado}</p>
                </Section>

                {plano.links && plano.links.length > 0 && (
                   <div className="mt-2">
                     <h4 className="text-xs font-bold text-slate-500 uppercase mb-1">Links</h4>
                     <div className="flex flex-wrap gap-2">
                       {plano.links.map((link, i) => (
                         <a key={i} href={link.url} target="_blank" rel="noreferrer" className="text-sm text-indigo-600 hover:underline">
                           {link.titulo} ↗
                         </a>
                       ))}
                     </div>
                   </div>
                )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Subcomponente auxiliar de estilo
const Section = ({ title, children }) => (
  <div>
    <h4 className="text-xs font-bold text-slate-500 uppercase mb-1 tracking-wide">{title}</h4>
    <div className="text-sm text-slate-700 leading-relaxed">{children}</div>
  </div>
);

export default PlanoCard;