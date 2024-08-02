import type { AppProps } from "next/app";
import "../global.css";
import { Header } from "@/components/molecules/Header";

export default function myApp({ Component, pageProps }: AppProps) {
  return (
    <main className="mx-auto flex items-center justify-center bg-blue-300/90">
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
