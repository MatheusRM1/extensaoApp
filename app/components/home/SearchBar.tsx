import React from 'react';

export const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="px-6 pb-6 flex gap-3">
      <div className="flex-1 relative">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar ações..."
          className="w-full bg-white text-gray-900 rounded-2xl py-3.5 pl-11 pr-4 border border-gray-100 shadow-sm focus:ring-2 focus:ring-[#C32128] outline-none transition-all"
        />
      </div>
      <button className="bg-white border border-gray-100 shadow-sm p-3.5 rounded-2xl flex items-center justify-center text-gray-600 hover:bg-gray-50 transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
        </svg>
      </button>
    </div>
  );
};