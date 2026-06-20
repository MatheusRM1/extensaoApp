import React from 'react';

export const Input = ({ label, type = "text", placeholder, value, onChange }) => {
  return (
    <div className="mb-5">
      <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full bg-[#f4f5f7] text-gray-900 rounded-[14px] px-4 py-3.5 border-none focus:ring-2 focus:ring-[#C32128] outline-none transition-all"
      />
    </div>
  );
};