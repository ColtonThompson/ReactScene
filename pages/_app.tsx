import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import { Jost } from 'next/font/google'

import type { AppProps } from 'next/app'

const jost = Jost({
  weight: '500',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
