import type { AppProps } from "next/app"
import "../assets/styles/globals.css"
import "../utils/twind.setup"

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return <Component {...pageProps} />
}
