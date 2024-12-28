import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CStyled from 'styled-components';

import Color from '@tool/color';

interface IProps {}

const DStack = styled(Stack)({
  display: 'flex',
  flexDirection: 'column',
  width: '1200px',
  padding: '2rem 0 0 2rem',
  marginTop: '3rem',
  boxSizing: 'border-box',
  backgroundColor: Color.black(0.1),
});
const EStack = styled(Stack)({
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  marginTop: '2rem',
});
const DTypography = styled(Typography)({
  margin: '0 1rem',
  textDecoration: 'underline',
});
const Item = CStyled.section`
  width: 15rem;
  height: 8rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 2rem;
  margin-bottom: 2rem;
  box-sizing: border-box;
  cursor: pointer;
  border: 4px solid ${Color.black(0)};
  background-color: ${Color.black(0.3)};

  &:hover { border: 4px solid ${Color.black(1)} }
`;
const ETypography = styled(Typography)({
  display: 'inline-flex',
  alignItems: 'center',

  '& b': {
    display: 'inline-flex',
    width: '1.2rem',
    height: '1.6rem',
    boxSizing: 'border-box',
    borderLeft: `4px solid ${Color.primary(1)}`,
  },
});

const Tangram = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DStack>
      <ETypography variant="h6"><b />Available Link</ETypography>
      <EStack>
        <Item onClick={() => navi('/gallery')}>
          <DTypography variant="body1">To Gallery</DTypography>
        </Item>
        <Item onClick={() => navi('/stores?storeName=tangram')}>
          <DTypography variant="body1">To Flushing NY</DTypography>
        </Item>
        <Item onClick={() => navi('/parties-info')}>
          <DTypography variant="body1">To Parties-Info</DTypography>
        </Item>
        <Item onClick={() => navi('/stores?storeName=orlando-fl')}>
          <DTypography variant="body1">To Orlando FL</DTypography>
        </Item>
        <Item onClick={() => navi('/stores?storeName=saugus-ma')}>
          <DTypography variant="body1">To Saugus MA</DTypography>
        </Item>
        <Item onClick={() => navi('/stores?storeName=edison-nj')}>
          <DTypography variant="body1">To Edison NJ</DTypography>
        </Item>
      </EStack>
    </DStack>
  );
};

export default observer(Tangram);
