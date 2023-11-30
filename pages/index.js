import Head from 'next/head';
import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import contents from './contents';
import openAPIYaml from './OpenAPI_yaml';

export default function HomePage() {
  const [serverUrl, setServerUrl] = useState('');

  useEffect(() => {
    setServerUrl(window.location.origin);
  }, []);

  return (
    <div className='container mx-auto px-4'>
      <Head>
        <title>File Operations API Documentation</title>
      </Head>

      <Header />

      <main className='my-8'>
        <p>{contents}</p>
        <pre className='bg-gray-100 p-4 rounded'>{JSON.stringify(openAPIYaml, null, 2)}</pre>
      </main>

      <Footer />
    </div>
  );
}