import GlobalStyles from "@/styles/GlobalStyles";
import type { AppProps } from "next/app";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <FontStyle />
      <Component {...pageProps} />{" "}
    </>
  );
}

function FontStyle() {
  return (
    <style jsx global>{`
      html {
        font-family: ${lexend.style.fontFamily};
      }
    `}</style>
  );
}
