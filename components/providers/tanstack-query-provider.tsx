"use client";

import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { FC, useState } from "react";

interface Props {
  children: React.ReactNode;
}

const TanStackQueryProvider: FC<Props> = ({ children }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: (err) => {
            const errorMessage =
              err instanceof Error ? err.message : "An unknown error occurred.";
            console.warn(errorMessage);
          },
        }),
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanStackQueryProvider;
