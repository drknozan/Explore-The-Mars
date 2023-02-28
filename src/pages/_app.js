import MainLayout from '@/layouts/MainLayout';
import Head from 'next/head';
import '@/styles/globals.css';
import { Orbitron } from '@next/font/google';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import '@/styles/nprogress.css';

const orbitron = Orbitron({ weight: '400', subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => {
      NProgress.start();
    };

    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);

  return (
    <>
      <Head>
        <title>Explore The Mars</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🔭</text></svg>"
        ></link>
      </Head>
      <main className={orbitron.className}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </main>
    </>
  );
}
