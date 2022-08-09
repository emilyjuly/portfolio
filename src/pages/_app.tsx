import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';

import GlobalStyles from '../styles/global';
import theme from '../styles/theme';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <NextNProgress
        color={theme.primary}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />

      <Toaster position="bottom-right" />
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default MyApp;
