import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import type { AppProps } from 'next/app';

// Her samles de fælles Material UI-indstillinger, som bruges på hele siden.
const theme = createTheme({
  palette: {
    background: {
      default: '#f5f7fb',
    },
    primary: {
      main: '#1f4b99',
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ThemeProvider gør temaet tilgængeligt for alle komponenter i appen.
    <ThemeProvider theme={theme}>
      {/* CssBaseline nulstiller browserens standard-styling, så layoutet bliver ensartet. */}
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
