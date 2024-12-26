import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { MdMenu, MdArrowDownward } from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';
import moHome, { toggleParties, toggleLocation } from '@store/home';
import GatchaLogo from '@icon/gatcha-logo.png';
import PartiesBox from './parties-box';
import LocationBox from './location-box';

interface IProps {}

const WideStack = styled(Stack)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: `${Size.header}rem`,
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 50,
  borderBottom: `0.1rem solid ${Color.black(0.1)}`,
  backgroundColor: Color.white(0.9),
});
const DStack = styled(Stack)({
  width: '100%',
  height: '100%',
  maxWidth: Size.maxWidth,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const DBox = styled(Box)({
  height: '100%',
});
const EBox = styled(DBox)({
  marginLeft: '2rem',
  alignItems: 'center',

  '& img': { cursor: 'pointer' },
});
const DButton = styled(Button)({
  padding: '0 3rem',

  '& .MuiButton-endIcon': {
    marginLeft: '0.2rem',
    marginTop: '0.2rem',
  },
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
  const navi = useNavigate();
  const { partiesShow, locationShow } = moHome;

  useEffect(() => {
    return () => {};
  }, []);

  const hiddenBox = () => {
    toggleParties(true);
    toggleLocation(true);
  };

  return (
    <WideStack>
      <DStack direction="row" onMouseEnter={() => hiddenBox()}>
        <EBox>
          <img src={GatchaLogo} width='180px' onClick={() => navi('/')} />
        </EBox>
        <DBox>
          <DButton color="info" onMouseEnter={() => hiddenBox()}>What&apos;s New</DButton>
          <DButton color="info" onMouseEnter={() => hiddenBox()}>Studio</DButton>
          <DButton color="info" endIcon={<MdArrowDownward />} onMouseEnter={() => {
            toggleParties(false);
            toggleLocation(true);
          }}>Parties</DButton>
          <DButton color="info" endIcon={<MdArrowDownward />} onMouseEnter={() => {
            toggleLocation(false);
            toggleParties(true);
          }}>Location/Pricing</DButton>
        </DBox>
        <DBox onMouseEnter={() => toggleLocation(true)}>
          <FButton color="secondary">
            <MdMenu />
            <DTypography variant="body1">Menu</DTypography>
          </FButton>
        </DBox>
      </DStack>

      {partiesShow ? <PartiesBox /> : null}
      {locationShow ? <LocationBox /> : null}
    </WideStack>
  );
};

export default observer(Header);
