import { useState, useMemo } from 'react';
import { acoesData } from '../data/mockAcoes';

export const useAcoes = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [activeFilters, setActiveFilters] = useState({
    modalidade: null,
    area: null,
    cargaHoraria: null
  });

  const [tempFilters, setTempFilters] = useState({
    modalidade: null,
    area: null,
    cargaHoraria: null
  });

  const filteredAcoes = useMemo(() => {
    return acoesData.filter(acao => {
      const matchSearch = acao.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          acao.area.toLowerCase().includes(searchTerm.toLowerCase());

      const matchModality = activeFilters.modalidade ? acao.modality === activeFilters.modalidade : true;

      const matchArea = activeFilters.area ? acao.area === activeFilters.area : true;

      let matchHours = true;
      if (activeFilters.cargaHoraria) {
        const hoursNum = parseInt(acao.hours.replace('h', ''));
        if (activeFilters.cargaHoraria === 'Até 30h') matchHours = hoursNum <= 30;
        else if (activeFilters.cargaHoraria === '30–60h') matchHours = hoursNum > 30 && hoursNum <= 60;
        else if (activeFilters.cargaHoraria === 'Mais de 60h') matchHours = hoursNum > 60;
      }

      return matchSearch && matchModality && matchArea && matchHours;
    });
  }, [searchTerm, activeFilters]);

  const applyFilters = () => {
    setActiveFilters(tempFilters);
  };

  const clearFilters = () => {
    const emptyFilters = { modalidade: null, area: null, cargaHoraria: null };
    setTempFilters(emptyFilters);
    setActiveFilters(emptyFilters);
  };

  return {
    searchTerm,
    setSearchTerm,
    filteredAcoes,
    tempFilters,
    setTempFilters,
    applyFilters,
    clearFilters
  };
};