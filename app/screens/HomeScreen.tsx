import React from 'react';
import { AcaoCard } from '~/components/home/AcaoCard';
import { BottomNav } from '~/components/home/BottomNav';
import { HomeHeader } from '~/components/home/HomeHeader';
import { SearchBar } from '~/components/home/SearchBar';
import { DeviceMockup } from '~/components/layout/DeviceMockup';
import { useAcoes } from '~/hooks/useAcoes';

export default function HomeScreen() {
  const { searchTerm, setSearchTerm, filteredAcoes } = useAcoes();

  return (
    <DeviceMockup>
      <div className="absolute inset-0 bg-[#f4f5f7] z-20 flex flex-col pt-10 rounded-[32px] overflow-hidden">
        <HomeHeader />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        
        <div className="px-6 pb-28 overflow-y-auto flex-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <p className="text-[13px] font-medium text-gray-500 mb-4 ml-1">
            {filteredAcoes.length} ações encontradas
          </p>
          {filteredAcoes.map(acao => (
            <AcaoCard key={acao.id} acao={acao} />
          ))}
        </div>

        <BottomNav />
      </div>
    </DeviceMockup>
  );
}