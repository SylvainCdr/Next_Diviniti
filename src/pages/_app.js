import "@/index.css";

// import { AppProvider } from "@/Components/appContext";
import Template from "@/components/Template/Template";
import Head from "next/head";
import { useRouter } from 'next/router';
import * as gtag from '../../lib/gtag';
import { useEffect } from 'react';


 function App({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  
  return (
    <>
      <Head>
        {/* Viewport Meta Tag for Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
   
      
          <Template>
            <Component {...pageProps} />
          </Template>
  
     
    </>
  );
}

export default App;