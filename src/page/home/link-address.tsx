import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

interface IProps {}

const DStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'row',
  marginTop: '2rem',
});
const DTypography = styled(Typography)({
  margin: '0 1rem',
  textDecoration: 'underline',
});

const Tangram = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DStack>
      <NavLink to="/gallery">
        <DTypography variant="body1">To Gallery</DTypography>
      </NavLink>
      <NavLink to="/tangram">
        <DTypography variant="body1">To Flushing NY</DTypography>
      </NavLink>
      <NavLink to="/parties-info">
        <DTypography variant="body1">To Parties-Info</DTypography>
      </NavLink>
      <NavLink to="/orlando-fl">
        <DTypography variant="body1">To Orlando FL</DTypography>
      </NavLink>
      <NavLink to="/saugus-ma">
        <DTypography variant="body1">To Saugus MA</DTypography>
      </NavLink>
      <NavLink to="/edison-nj">
        <DTypography variant="body1">To Edison NJ</DTypography>
      </NavLink>
    </DStack>
  );
};

export default observer(Tangram);
