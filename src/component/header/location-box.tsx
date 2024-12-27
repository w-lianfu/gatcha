import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';
import moHome, { toggleLocation } from '@store/home';

interface IProps {}

const DPaper = styled(Paper)({
  position: 'absolute',
  top: '10rem',
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
  flexWrap: 'wrap',
  padding: '0 3rem',
  boxSizing: 'border-box',
  backgroundColor: Color.white(0),
});
const DStack = styled(Stack)({});

const LocationBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper onMouseEnter={() => toggleLocation(false)}
      onMouseLeave={() => toggleLocation(true)}>
      <EPaper>
        <DStack>
          <Typography variant="h5">Locations</Typography>
          <Typography variant="body1">Hello</Typography>
        </DStack>

        <DStack>
          <Typography variant="h5">Pricing</Typography>
          <Typography variant="body1">Hello</Typography>
        </DStack>
      </EPaper>
    </DPaper>
  );
};

export default observer(LocationBox);
