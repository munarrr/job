import { AppProps } from 'next/app';
import '../../src/styles/global.scss'
import "@/styles/style.css"
import "@/styles/all.min.css"

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
