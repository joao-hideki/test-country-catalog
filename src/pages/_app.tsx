import { GlobalStyle } from '@/styles/global';
import { Header } from '@/styles/pages/app';
import { defaultTheme } from '@/styles/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <>
      <ThemeProvider theme={defaultTheme}>
        <Header>
          <h1>Países</h1>
        </Header>

        <Component {...pageProps} />
        <GlobalStyle />
      </ThemeProvider>
    </>
  );
}
