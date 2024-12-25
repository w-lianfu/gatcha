import { useEffect } from 'react';

import '@scss/index.scss';
import Home from '@page/home/index';

interface IProps {}

const AppRoot = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Home />
  );
};

export default AppRoot;
