import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { Paper, Stack, Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({
  width: '100%',
  flexDirection: 'row',
  paddingTop: '3rem',
  borderTop: `0.1rem solid ${Color.black(0.3)}`,
});
const DBox = styled(Box)({
  flexDirection: 'column',
  marginLeft: '5rem',
});
const DButton = styled(Button)({});
const TitleTypography = styled(Typography)({
  marginBottom: '0.6rem',
  fontSize: '2rem',
});
const TextTypography = styled(Typography)({});

const Footer = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DStack>
      <DBox>
        <TitleTypography>Flag Ship Location</TitleTypography>
        <TextTypography>Gatcha Tangram</TextTypography>
        <TextTypography>133-33 39th Ave</TextTypography>
        <TextTypography>Flushing, NY</TextTypography>
        <TextTypography>13354</TextTypography>
      </DBox>
      <DBox>
        <TitleTypography>Location</TitleTypography>
        <TextTypography>Gatcha Orlando</TextTypography>
        <TextTypography>8001 S Orange Blossom TRL</TextTypography>
        <TextTypography>Orlando, FL 32809</TextTypography>
      </DBox>
      <DBox>
        <TitleTypography>Contact</TitleTypography>
        <TextTypography>help@gatcha.us</TextTypography>
      </DBox>
    </DStack>
  );
};

export default Footer;
