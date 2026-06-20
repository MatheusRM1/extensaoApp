import { useState, useMemo } from 'react';
import { acoesData } from '../data/mockAcoes';

export const useAcoes = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAcoes = useMemo(() => {
    return acoesData.filter(acao =>
      acao.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      acao.area.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return {
    searchTerm,
    setSearchTerm,
    filteredAcoes
  };
};