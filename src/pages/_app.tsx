import type { AppProps } from "next/app";
import "../global.css";

export default function myApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
