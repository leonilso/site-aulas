export const getUniqueValues = (data, field) => {
  if (!data) return [];
  const values = data.map(item => item[field]).flat();
  return [...new Set(values)].sort();
};

export const filterPlans = (plans, filters, searchTerm) => {
  return plans.filter((plan) => {
    // 1. Busca textual (Search)
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      plan.temas.join(" ").toLowerCase().includes(searchLower) ||
      plan.objetivosGerais.toLowerCase().includes(searchLower) ||
      plan.professor.toLowerCase().includes(searchLower);

    if (searchTerm && !matchesSearch) return false;

    // 2. Filtros Específicos
    for (const [key, value] of Object.entries(filters)) {
      if (value && value !== "") {
        if (Array.isArray(plan[key])) {
          // Se o campo for array (ex: temas), verifica se inclui
          if (!plan[key].includes(value)) return false;
        } else {
          // Comparação exata para strings
          if (plan[key] !== value) return false;
        }
      }
    }

    return true;
  });
};