import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`flex flex-col justify-center items-start bg-stone-900 min-h-screen text-stone-100 ${roboto.className}`}>
      <div className="max-w-[1180px] w-full mx-auto py-2">
        <strong className="text-4xl text-amber-600">
          Idkshop.
        </strong>
      </div>
      <Component {...pageProps} />
    </main>
  )
}
