import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import Header from '@/components/utility/Header';
import Footer from '@/components/utility/Footer';
import { QueryClient, QueryClientProvider } from 'react-query';

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender == false) {
      import('../mocks').then(({ setupMocks }) => {
        setupMocks().then((res) => {
          setShouldRender(true);
        });
      });
    }
  }, [shouldRender]);

  const queryClient = new QueryClient();

  if (shouldRender) {
    return (
      <QueryClientProvider client={queryClient}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </QueryClientProvider>
    );
  } else {
    return null;
  }
}
