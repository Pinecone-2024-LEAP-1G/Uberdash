"use client";

import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

export const ToastModal = () => {
  const { toast } = useToast();

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Амжилттай сагслагдлаа ✅",
        });
      }}
    >
      Show Toast
    </Button>
  );
};
