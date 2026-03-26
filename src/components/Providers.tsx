"use client";

import { ThemeProvider } from "next-themes";
import { ApolloProvider } from "@apollo/client/react";
import { getApolloClient } from "@/lib/apollo-client";
import { AuthProvider } from "@/contexts/AuthContext";

export function Providers({ children }: { children: React.ReactNode }) {
  const client = getApolloClient();

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ApolloProvider client={client}>
        <AuthProvider>{children}</AuthProvider>
      </ApolloProvider>
    </ThemeProvider>
  );
}
