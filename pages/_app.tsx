import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import Header from "@/components/utility/Header";
import Footer from "@/components/utility/Footer";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App({ Component, pageProps }: AppProps) {
  if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
    require("../mocks");
  }

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <div className="flex-1">
        <Component {...pageProps} />
      </div>
      <Footer />
    </QueryClientProvider>
  );
}
