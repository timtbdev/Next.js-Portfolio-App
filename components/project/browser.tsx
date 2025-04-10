import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
}

const BrowserWrapper: FC<Props> = ({ children }) => {
  return (
    <div className="bg-accent border-border rounded-t-lg border text-sm">
      <div className="flex gap-2 p-2">
        <span className="size-3 rounded-full bg-white dark:bg-white/20"></span>
        <span className="size-3 rounded-full bg-white dark:bg-white/20"></span>
        <span className="size-3 rounded-full bg-white dark:bg-white/20"></span>
      </div>
      <div className="border-border bg-background dark:bg-accent/50 border">
        {children}
      </div>
    </div>
  );
};

export default BrowserWrapper;
