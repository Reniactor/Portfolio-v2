import React, { useEffect, useRef } from "react";
import { CiCircleCheck, CiCircleRemove } from "react-icons/ci";

interface FormDialogProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormDialogError: React.FC<FormDialogProps> = ({ isOpen, setIsOpen }) => {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [isOpen, setIsOpen]);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dialogRef.current &&
      !dialogRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <div
      role="dialog"
      aria-labelledby="dialogTitle"
      aria-describedby="dialogDescription"
      aria-modal="true"
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"} pointer-events-${isOpen ? "auto" : "none"}`}
      tabIndex={-1}
    >
      <div
        className="relative flex h-72 justify-center rounded-lg bg-[#0F0F0F] p-6 py-8 shadow-lg"
        ref={dialogRef}
      >
        <button
          aria-label="Close dialog button"
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
          onClick={closeDialog}
        >
          &times;
        </button>
        <div className="flex w-full flex-col items-center gap-4 py-4">
          <CiCircleRemove className="h-12 w-12 text-center text-red-500" />
          <h1 id="dialogTitle" className="text-2xl font-bold text-color30">
            There's been an error sending your message :(
          </h1>
          <h2 id="dialogDescription" className="text-lg text-[#BFBFBF]">
            Please try sending it again.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default FormDialogError;
