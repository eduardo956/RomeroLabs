import React from 'react';
import { useToast } from '../context/ToastContext';
import { X, CheckCircle2 } from 'lucide-react';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed z-[100] flex flex-col gap-3 pointer-events-none top-20 left-4 right-4 sm:top-auto sm:right-auto sm:bottom-5 sm:left-5 sm:max-w-md">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-[#14151a]/95 border-2 border-[#d49a53] text-white p-4 rounded-xl shadow-[0_10px_30px_rgba(212,154,83,0.3)] backdrop-blur-xl flex items-center justify-between gap-3 animate-toast"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#d49a53]/20 text-[#f7e1bc] flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-5 h-5 text-[#d49a53]" />
            </div>
            <p className="font-body-sm text-xs sm:text-sm font-semibold text-white">
              {toast.message}
            </p>
          </div>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
