import { useState, useCallback } from 'react';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_VALUE;
  return count.toString();
}

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

export function useToast() {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback(({ ...props }) => {
    const id = genId();

    const update = (id) =>
      setToasts((toasts) =>
        toasts.map((t) => (t.id === id ? { ...t, ...props } : t))
      );

    const dismiss = (toastId) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== toastId));
    };

    setToasts((toasts) => {
      const newToasts = [
        ...toasts,
        {
          ...props,
          id,
          open: true,
          onOpenChange: (open) => {
            if (!open) dismiss(id);
          },
        },
      ];

      if (newToasts.length > TOAST_LIMIT) {
        newToasts.shift();
      }

      return newToasts;
    });

    return {
      id,
      dismiss,
      update,
    };
  }, []);

  return {
    toast,
    toasts,
    dismiss: (toastId) => {
      setToasts((toasts) => toasts.filter((t) => t.id !== toastId));
    },
  };
}