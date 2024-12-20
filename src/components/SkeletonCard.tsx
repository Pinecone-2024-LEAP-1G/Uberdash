"use client";
import { Skeleton } from "@/components/ui/skeleton";

export const SkeletonCard = () => {
  return (
    <div className="w-[288px] rounded-xl overflow-hidden">
      <div className="w-full h-[130px] rounded-xl">
        <Skeleton className="w-full h-full rounded-xl" />
      </div>

      <div className="mt-3 gap-1 flex w-full justify-between px-3">
        <div className="w-[70%]">
          <Skeleton className="h-5 w-[100px]" />
          <Skeleton className="h-4 w-[80px]" />
        </div>
        <div className="rounded-[50%] w-[28px] h-[28px] flex items-center justify-center text-[12px] bg-slate-200">
          <Skeleton className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};
