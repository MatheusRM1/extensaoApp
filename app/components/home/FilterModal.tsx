import React from 'react';

export const FilterModal = ({ isOpen, onClose, tempFilters, setTempFilters, applyFilters, clearFilters }) => {
  if (!isOpen) return null;

  const toggleFilter = (category, value) => {
    setTempFilters(prev => ({
      ...prev,
      [category]: prev[category] === value ? null : value
    }));
  };

  const FilterPill = ({ label, category, value, icon }) => {
    const isSelected = tempFilters[category] === value;
    return (
      <button
        onClick={() => toggleFilter(category, value)}
        className={`px-4 py-2.5 rounded-xl text-[13px] font-semibold flex items-center justify-center gap-2 transition-all flex-1 ${
          isSelected ? 'bg-[#C32128] text-white shadow-md shadow-red-500/20' : 'bg-[#f4f5f7] text-gray-600 hover:bg-gray-200'
        }`}
      >
        {icon && <span>{icon}</span>}
        {label}
      </button>
    );
  };

  const handleApply = () => {
    applyFilters();
    onClose();
  };

  const handleClear = () => {
    clearFilters();
    onClose();
  };

  return (
    <div className="absolute inset-0 z-50 flex flex-col justify-end rounded-[32px] overflow-hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>

      <div className="relative bg-white rounded-t-[32px] px-6 pt-6 pb-8 w-full shadow-2xl flex flex-col animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-[20px] font-bold text-gray-900">Filtrar ações</h2>
          <button onClick={onClose} className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">
              Modalidade
            </label>
            <div className="flex gap-2">
              <FilterPill label="Presencial" category="modalidade" value="Presencial" />
              <FilterPill label="Remoto" category="modalidade" value="Remoto" />
              <FilterPill label="Híbrido" category="modalidade" value="Híbrido" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">
              Área de conhecimento
            </label>
            <div className="grid grid-cols-2 gap-2">
              <FilterPill label="Tecnologia" icon="💻" category="area" value="Tecnologia" />
              <FilterPill label="Saúde" icon="🏥" category="area" value="Saúde" />
              <FilterPill label="Educação" icon="📚" category="area" value="Educação" />
              <FilterPill label="Cultura" icon="🎨" category="area" value="Cultura" />
            </div>
          </div>

          <div>
            <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-3">
              Carga horária
            </label>
            <div className="flex gap-2">
              <FilterPill label="Até 30h" category="cargaHoraria" value="Até 30h" />
              <FilterPill label="30–60h" category="cargaHoraria" value="30–60h" />
              <FilterPill label="Mais de 60h" category="cargaHoraria" value="Mais de 60h" />
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <button 
            onClick={handleClear}
            className="flex-1 bg-[#f4f5f7] hover:bg-gray-200 text-gray-600 font-bold rounded-xl py-4 transition-all"
          >
            Limpar
          </button>
          <button 
            onClick={handleApply}
            className="flex-[2] bg-[#C32128] hover:bg-[#a81920] text-white font-bold rounded-xl py-4 shadow-lg shadow-red-500/30 transition-all"
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  );
};