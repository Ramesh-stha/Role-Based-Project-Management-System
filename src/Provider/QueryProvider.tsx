"use client";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export default function QueryProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // create QueryClient only once in client component
  const [queryClient] = useState<QueryClient>(() => {
    return new QueryClient();
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
