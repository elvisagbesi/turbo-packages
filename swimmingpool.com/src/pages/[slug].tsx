import Head from 'next/head';
import React from 'react';
import BusinessInformation from "~poolcorp/contentlib/business-information/src/BusinessInformation";


export default function LandingPage() {
  return (
    <>
      <Head>
        <title>Testing project</title>
      </Head>
      <BusinessInformation />
      <main>Hello world</main>
    </>
  );
}
