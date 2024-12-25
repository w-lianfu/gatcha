import { useEffect } from 'react';
import { Stack, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';
import Size from '@tool/size';
import GatchaLogo from '@icon/gatcha-logo.png';

interface IProps {}

const DStack = styled(Stack)({
  width: '100%',
  height: `${Size.header}rem`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const DBox = styled(Box)({});

const Header = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DStack direction="row">
      <DBox>Left</DBox>

      <DBox><img src={GatchaLogo} width='180px' /></DBox>

      <DBox>Right</DBox>
    </DStack>
  );
};

export default Header;
