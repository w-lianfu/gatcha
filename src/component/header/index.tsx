import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import {
  MdMenu, MdClose, MdArrowDownward, MdArrowUpward,
} from 'react-icons/md';

import Color from '@tool/color';
import Size from '@tool/size';
import moHeader, {
  toggleParties, toggleLocation, toggleMenu,
} from '@store/header';
import GatchaLogo from '@icon/gatcha-logo.png';
import PartiesBox from './parties-box';
import LocationBox from './location-box';
import MenuBox from './menu-box';

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
  borderRight: `1px solid ${Color.white(1)}`,
  backgroundColor: Color.black(0.15),

  '& .MuiButton-endIcon': {
    marginLeft: '0.2rem',
    marginTop: '0.2rem',
  },
  '&:hover': { backgroundColor: Color.black(0.15) },
  '&.active': { backgroundColor: Color.black(0.25) },
});
const FButton = styled(Button)({
  width: '12rem',
  padding: '0 1rem',
  boxSizing: 'border-box',
  fontSize: '4rem',
  backgroundColor: Color.secondary(0.2),

  '&:hover': { backgroundColor: Color.secondary(0.2) },
  '&.active': { backgroundColor: Color.secondary(0.3) },
});
const DTypography = styled(Typography)({
  boxSizing: 'border-box',
  marginLeft: '0.5rem',
  fontSize: '2rem',
});

const Header = (props: IProps) => {
  const navi = useNavigate();
  const { partiesShow, locationShow, menuShow } = moHeader;

  useEffect(() => {
    return () => {};
  }, []);

  const hiddenBox = (isParties: boolean, isLocation: boolean) => {
    toggleParties(isParties);
    toggleLocation(isLocation);
  };

  return (
    <WideStack>
      <DStack direction="row">
        <EBox><img src={GatchaLogo} width='180px' onClick={() => navi('/')} /></EBox>
        <DBox>
          <DButton color="info"
            onMouseEnter={() => hiddenBox(false, false)}>What&apos;s New
          </DButton>
          <DButton color="info" onClick={() => navi('/')}
            onMouseEnter={() => hiddenBox(false, false)}>Studio
          </DButton>
          <DButton color="info"
            endIcon={partiesShow ? <MdArrowUpward /> : <MdArrowDownward />}
            onMouseEnter={() => hiddenBox(true, false)}
            onMouseLeave={() => toggleParties(false)}
            className={[partiesShow ? 'active' : ''].join(',')}>Parties
          </DButton>
          <DButton color="info"
            endIcon={locationShow ? <MdArrowUpward /> : <MdArrowDownward />}
            onMouseEnter={() => hiddenBox(false, true)}
            onMouseLeave={() => toggleLocation(false)}
            className={[locationShow ? 'active' : ''].join(',')}>Location/Pricing
          </DButton>
        </DBox>
        <DBox onMouseEnter={() => toggleMenu(true)}
          onMouseLeave={() => toggleMenu(false)}>
          <FButton color="secondary"
            className={[menuShow ? 'active' : ''].join(',')}>
            {menuShow ? <MdClose size="30px" /> : <MdMenu size="30px" />}
            <DTypography variant="body1">Menu</DTypography>
          </FButton>
        </DBox>
      </DStack>

      {partiesShow ? <PartiesBox /> : null}
      {locationShow ? <LocationBox /> : null}
      {menuShow ? <MenuBox /> : null}
    </WideStack>
  );
};

export default observer(Header);
