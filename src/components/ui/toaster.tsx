"use client";

import { useToast } from "@/hooks/use-toast";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast
            className="rounded-2xl w-[380px] h-[208px] gap-2"
            key={id}
            {...props}
          >
            <div className=" grid grid-cols-1">
              <div>
                {title && (
                  <ToastTitle className="text-3xl font-bold">
                    {title}
                  </ToastTitle>
                )}
                {description && (
                  <ToastDescription className="text-[16px] mb-4">
                    {description}
                  </ToastDescription>
                )}
              </div>
              <div>{action}</div>
            </div>
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
