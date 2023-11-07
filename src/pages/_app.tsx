import { ApolloProvider } from '@apollo/client';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app.js';
import client from '@/graphql/apollo';
import Head from 'next/head';
import styles from '../style/Home.module.css';
import { SignInOut } from '../components/SignInOut';
import { ModalProvider } from '@/components/modals';

function MyApp({ Component, pageProps: { session, ...pageProps } }:AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <ModalProvider>
        
        <div className={styles.container}>
          <Head>
          <title>[DEMO] Neo4j and Next.js</title>
          <link rel="icon" href="/favicon.ico" />
          </Head>
          
          <header className={styles.header}>
          <div>
          <SignInOut />
          </div>
          </header>
          <Component {...pageProps} />
          <footer className={styles.footer}>
            grouplang // hyperplex
          </footer>
        </div>
        </ModalProvider>
      
      </ApolloProvider>
    </SessionProvider>
    );
  }
  
  export default MyApp;