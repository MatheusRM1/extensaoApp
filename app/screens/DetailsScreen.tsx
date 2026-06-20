import React from 'react';
import { DeviceMockup } from '../components/layout/DeviceMockup';
import { DetailsHeader } from '../components/details/DetailsHeader';
import { DetailsContent } from '../components/details/DetailsContent';
import { DetailsActions } from '../components/details/DetailsAction';
import { ResponsibleCard } from '../components/shared/ResponsibleCard';

export default function DetailsScreen({ acao, onBack, onContact }) {
  if (!acao) return null;

  return (
    <DeviceMockup>
      <div className="absolute inset-0 bg-[#f4f5f7] z-20 flex flex-col rounded-[32px] overflow-hidden">
        <DetailsHeader acao={acao} onBack={onBack} />
        
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <DetailsContent acao={acao} />
          
          <div className="mb-10">
            <h3 className="text-[17px] font-bold text-[#0a1128] mb-4">Responsável</h3>
            <ResponsibleCard responsible={acao.responsible} />
          </div>

          <DetailsActions onContact={onContact} />
        </div>
      </div>
    </DeviceMockup>
  );
}