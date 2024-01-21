import '../styles/global.css';

import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;

// TODO : 2. Import csv files
// TODO : 3. Call corelation matrix in API
