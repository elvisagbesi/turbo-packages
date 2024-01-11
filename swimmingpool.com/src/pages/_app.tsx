import { NextComponentType } from 'next';
import { AppContext } from 'next/app';

import RootLayout from './layout';

interface AppProps {
  Component: NextComponentType;
  pageProps: any;
}

function App({ Component, pageProps: { ...pageProps } }: AppProps) {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  let pageProps = {};

  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }

  return { pageProps: { ...pageProps } };
};

export default App;
