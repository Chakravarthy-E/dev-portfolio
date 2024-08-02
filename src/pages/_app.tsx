import type { AppProps } from "next/app";
import "../global.css";
import Navbar from "@/components/molecules/Navbar";

export default function myApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
