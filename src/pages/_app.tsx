"use client";
import type { AppProps } from "next/app";
import "../global.css";
import { Header } from "@/components/molecules/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import RootProviders from "@/components/providers/RootProviders";

export default function myApp({ Component, pageProps }: AppProps) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  return (
    <RootProviders>
      <AnimatePresence mode="wait">
        <motion.div
          initial="initialState"
          animate="animateState"
          exit={"exitState"}
          key={router.route}
          className="mx-auto flex items-center justify-center base-page-size font-dosis"
          transition={{
            duration: 0.75,
          }}
          variants={{
            initialState: {
              opacity: 0,
              clipPath: "polygon(0 0 ,100% 0, 100% 0, 100% 100%, 0 100%",
            },
            animateState: {
              opacity: 1,
              clipPath: "polygon(0 0 ,100% 0, 100% 0, 100% 100%, 0 100%",
            },
            exitState: {
              clipPath: "polygon(50% 0 ,50% 0, 50% 0, 50% 100%, 50% 100%",
            },
          }}
        >
          <Header />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </RootProviders>
  );
}
