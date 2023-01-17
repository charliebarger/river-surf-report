import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [shouldRender, setShouldRender] = useState(false);
  if (true) {
    import("../mocks").then(({ setupMocks }) => {
      console.log("mocks are set up");
      setupMocks();
      setShouldRender(true);
    });
  }

  if (shouldRender) {
    return <Component {...pageProps} />;
  } else {
    return null;
  }
}
