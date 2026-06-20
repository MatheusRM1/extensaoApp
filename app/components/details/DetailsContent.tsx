import React from 'react';

const MetricCard = ({ iconPath, label, value }) => (
  <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50">
    <div className="flex items-center gap-1.5 text-gray-400 mb-1">
      <svg className="w-4 h-4 text-[#C32128]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath}></path>
      </svg>
      <span className="text-[10px] font-bold uppercase tracking-wider">{label}</span>
    </div>
    <p className="text-[15px] font-bold text-[#0a1128]">{value}</p>
  </div>
);

export const DetailsContent = ({ acao }) => (
  <>
    <div className="grid grid-cols-2 gap-3 mb-6">
      <MetricCard iconPath="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" label="Modalidade" value={acao.modality} />
      <MetricCard iconPath="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" label="Carga Horária" value={acao.hours} />
      <MetricCard iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" label="Área" value={acao.area} />
      <MetricCard iconPath="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" label="Período" value={acao.period} />
    </div>

    <div className="flex items-center gap-3 bg-[#e8f5e9] py-2 px-3 rounded-xl w-fit mb-8">
      <div className="w-2 h-2 rounded-full bg-green-600"></div>
      <span className="text-[13px] font-bold text-green-700">{acao.status}</span>
      <span className="text-gray-300">|</span>
      <span className="text-[13px] text-gray-500">{acao.department}</span>
    </div>

    <div className="mb-8">
      <h3 className="text-[17px] font-bold text-[#0a1128] mb-3">Sobre o projeto</h3>
      <p className="text-[15px] text-gray-500 leading-relaxed">{acao.description}</p>
    </div>

    <div className="mb-10">
      <h3 className="text-[17px] font-bold text-[#0a1128] mb-4">Atividades dos participantes</h3>
      <div className="flex flex-col gap-4">
        {acao.activities.map((activity, index) => (
          <div key={index} className="flex gap-4 items-start">
            <div className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
              <span className="text-[11px] font-bold text-[#C32128]">{index + 1}</span>
            </div>
            <p className="text-[15px] text-[#0a1128] leading-snug">{activity}</p>
          </div>
        ))}
      </div>
    </div>
  </>
);