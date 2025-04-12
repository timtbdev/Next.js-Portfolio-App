"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      variant="outline"
      className="gap-2 px-4 py-1.5"
      onClick={() => {
        router.back();
      }}
    >
      <ArrowLeftIcon className="size-4" />
      Back
    </Button>
  );
};

export default BackButton;
