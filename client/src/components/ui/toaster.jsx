import { useState, useEffect } from 'react';

const toasts = [];
let toastId = 0;

export function useToast() {
  const [, forceUpdate] = useState({});

  const toast = ({ title, description, variant = 'default' }) => {
    const id = ++toastId;
    const newToast = {
      id,
      title,
      description,
      variant,
      timestamp: Date.now(),
    };
    
    toasts.push(newToast);
    forceUpdate({});
    
    setTimeout(() => {
      const index = toasts.findIndex(t => t.id === id);
      if (index > -1) {
        toasts.splice(index, 1);
        forceUpdate({});
      }
    }, 5000);
  };

  return { toast };
}

export function Toaster() {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate({});
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-lg shadow-lg max-w-sm ${
            toast.variant === 'destructive'
              ? 'bg-red-600 text-white'
              : 'bg-white text-gray-800 border'
          }`}
        >
          <div className="font-semibold">{toast.title}</div>
          {toast.description && (
            <div className="text-sm mt-1">{toast.description}</div>
          )}
        </div>
      ))}
    </div>
  );
}