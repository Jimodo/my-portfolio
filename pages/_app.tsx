import 'tailwindcss/tailwind.css'
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider attribute="class" enableSystem={false}>
    <Navigation />
    <Component {...pageProps} />
    <Footer />
    </ThemeProvider>
    </>
  
  )
}
