"use client";
import React, { useState } from "react";
import { HiChevronUpDown } from "react-icons/hi2";

export type TableOption = { type: string; label: string };

const Dropdown = ({
  options,
  selected,
  onSelect,
}: {
  options: TableOption[];
  selected: TableOption;
  onSelect: (arg: TableOption) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: TableOption) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <div
        className={`flex h-5 w-28 items-center justify-center rounded-sm text-sm text-color30 transition-colors duration-300 hover:cursor-pointer hover:bg-[#333333]`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.label} <HiChevronUpDown className="h-5 w-auto p-0" />
      </div>
      {isOpen && (
        <div className="absolute right-0 z-10 w-fit origin-top-right rounded-b-md bg-[#333333] px-4 shadow-lg">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <div
                key={option.type}
                onClick={() => handleSelect(option)}
                className="flex h-5 w-20 items-center rounded-sm text-sm text-color30 transition-colors duration-300 hover:cursor-pointer hover:bg-[#555555]"
                role="menuitem"
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
