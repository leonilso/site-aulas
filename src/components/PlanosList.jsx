import React from 'react';
import PlanoCard from './PlanoCard';
import EmptyState from './EmptyState';

const PlanosList = ({ planos }) => {
  if (planos.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm text-slate-500">Mostrando <strong>{planos.length}</strong> resultados</span>
      </div>
      {planos
        // .filter((plano) => {
        //   const [ano, mes, dia] = plano.data.split("-");
        //   const dataPlano = new Date(ano, mes - 1, dia);

        //   const hoje = new Date();
        //   hoje.setHours(0, 0, 0, 0);

        //   return dataPlano >= hoje;
        // })
        .map((plano) => (
          <PlanoCard
            key={plano.id || JSON.stringify(plano)}
            plano={plano}
          />
        ))}

    </div>
  );
};

export default PlanosList;