import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import '@scss/index.scss';
import Theme from '@theme/index';
import AppRoute from './app-route';

interface IProps {}

const AppRoot = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ThemeProvider theme={Theme}>
      <AppRoute />
    </ThemeProvider>
  );
};

export default AppRoot;
