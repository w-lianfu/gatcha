import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CStyled from 'styled-components';

import Color from '@tool/color';
import Size from '@tool/size';
import moHeader, { toggleMenu } from '@store/header';

interface IProps {}

const DPaper = styled(Paper)({
  position: 'absolute',
  top: `${Size.header}rem`,
  width: '100%',
  paddingTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '3rem',
  zIndex: 55,
  backgroundColor: Color.white(0.9),
  borderBottom: `0.1rem solid ${Color.black(0.1)}`,
});
const EPaper = styled(Paper)({
  width: '100%',
  maxWidth: '1920px',
  display: 'flex',
  alignItems: 'flex-end',
  flexWrap: 'wrap',
  padding: '0 3rem',
  boxSizing: 'border-box',
  backgroundColor: Color.white(0),
});
const DStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  margin: '2rem 6rem 3rem 0',
});
const EStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  marginRight: '6rem',
});
const StoreAddress = CStyled.section`
  display: inline-flex;
  flex-direction: column;
  margin-left: 5rem;
`;
const TitleTypography = styled(Typography)({
  fontSize: '2.2rem',
  marginBottom: '1rem',
});
const DButton = styled(Button)({
  width: '13rem',
  marginLeft: '2rem',
  fontSize: '1.8rem',
});

const MenuBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper onMouseEnter={() => toggleMenu(true)}
      onMouseLeave={() => toggleMenu(false)}>
      <EPaper>
        <DStack>
          <DButton variant="contained" color="secondary">Home</DButton>
          <DButton variant="contained" color="secondary">Parties</DButton>
          <DButton variant="contained" color="secondary">About</DButton>
          <DButton variant="contained" color="secondary">Contact</DButton>
        </DStack>

        <EStack>
          <StoreAddress>
            <TitleTypography variant="body1">New York</TitleTypography>
            <Typography variant="body1">133-33 39TH AVE</Typography>
            <Typography variant="body1">FLUSHING NY 11354</Typography>
            <Typography variant="body1">(347)438-1080</Typography>
          </StoreAddress>
          <StoreAddress>
            <TitleTypography variant="body1">Florida</TitleTypography>
            <Typography variant="body1">Gatcha Orlando</Typography>
            <Typography variant="body1">8001 S Orange Blossom TRL</Typography>
            <Typography variant="body1">#1186A Orlando, FL 32809</Typography>
            <Typography variant="body1">(321)247-5537</Typography>
          </StoreAddress>
          <StoreAddress>
            <TitleTypography variant="body1">Massachusetts</TitleTypography>
            <Typography variant="body1">Gatcha Saugus</Typography>
            <Typography variant="body1">1201 Broadway</Typography>
            <Typography variant="body1">Saugus, MA 01906</Typography>
            <Typography variant="body1">(781)558-1945</Typography>
          </StoreAddress>
        </EStack>
      </EPaper>
    </DPaper>
  );
};

export default observer(MenuBox);
