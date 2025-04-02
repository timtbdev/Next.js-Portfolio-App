"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-gray-200 bg-white px-4 py-1.5 text-sm font-semibold text-gray-600 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.1)] backdrop-blur transition-all hover:border-gray-300 hover:bg-white/50"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeftIcon className="h-4 w-4" />
      Back
    </Button>
  );
};

export default BackButton;
