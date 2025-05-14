"use client";

import { useState, useRef, useEffect } from "react";

const Cell = ({ value }: { value: string }) => {
  const [isFullContentBeingDisplayed, setIsFullContentBeingDisplayed] =
    useState(false);
  const [selected, setSelected] = useState(false);
  const cellRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent) => {
    if (cellRef.current && !cellRef.current.contains(event.target as Node)) {
      setIsFullContentBeingDisplayed(false);
      setSelected(false); // Deselect when clicking outside
    }
  };

  const onSingleClick = () => {
    setSelected(true);
  };

  useEffect(() => {
    if (isFullContentBeingDisplayed || selected) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isFullContentBeingDisplayed, selected]);

  const handleCellDoubleClick = () => {
    setSelected(!selected);
    setIsFullContentBeingDisplayed(!isFullContentBeingDisplayed);
  };

  return (
    <div
      ref={cellRef}
      onClick={onSingleClick}
      onTouchStartCapture={handleCellDoubleClick}
      onDoubleClick={handleCellDoubleClick}
      className={`${isFullContentBeingDisplayed ? "relative" : "select-none truncate"} flex ${selected ? "border-2 border-color10shade transition-none" : "border-[1px] border-[#474747]"}  px-4 font-thin duration-300 hover:cursor-pointer hover:bg-[#333333] 
      `}
    >
      {isFullContentBeingDisplayed ? (
        <div className="absolute left-0 top-0 z-50 flex h-fit max-h-fit min-h-7 w-full max-w-60 flex-wrap items-center gap-4 text-wrap bg-[#333333] p-4 text-white transition-transform duration-300">
          {value}
          <span className="select-none text-xs font-extralight text-[#ababab]">
            readonly
          </span>
        </div>
      ) : (
        value
      )}
    </div>
  );
};

export default Cell;
