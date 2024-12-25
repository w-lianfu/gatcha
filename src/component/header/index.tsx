import { useEffect } from 'react';
import { Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MdMenu } from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';
import GatchaLogo from '@icon/gatcha-logo.png';

interface IProps {}

const DStack = styled(Stack)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: `${Size.header}rem`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: `0.1rem solid ${Color.black(0.1)}`,
  backgroundColor: Color.white(0.85),
  zIndex: 50,
});
const DBox = styled(Box)({
  height: '100%',
});
const EBox = styled(DBox)({
  marginLeft: '2rem',
  alignItems: 'center',
});
const DButton = styled(Button)({
  padding: '0 3rem',
});
const FButton = styled(Button)({
  padding: '0 2rem',
  fontSize: '4rem',
});
const DTypography = styled(Typography)({
  marginLeft: '0.3rem',
  fontSize: '2rem',
});

const Header = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DStack direction="row">
      <EBox><img src={GatchaLogo} width='180px' /></EBox>
      <DBox>
        <DButton color="info">What&apos;s New</DButton>
        <DButton color="info">Studio</DButton>
        <DButton color="info">Parties</DButton>
        <DButton color="info">Location/Pricing</DButton>
      </DBox>
      <DBox>
        <FButton color="secondary">
          <MdMenu />
          <DTypography variant="body1">Menu</DTypography>
        </FButton>
      </DBox>
    </DStack>
  );
};

export default Header;
