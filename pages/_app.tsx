import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (shouldRender == false) {
      import("../mocks").then(({ setupMocks }) => {
        setupMocks().then((res) => {
          setShouldRender(true);
        });
      });
    }
  }, [shouldRender]);

  if (shouldRender) {
    return <Component {...pageProps} />;
  } else {
    return null;
  }
}
