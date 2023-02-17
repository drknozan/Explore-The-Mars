import MainLayout from '@/layouts/MainLayout'
import '@/styles/globals.css'
import { Orbitron } from '@next/font/google'

const orbitron = Orbitron({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {

  return (
    <main className={orbitron.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </main>
  )
}