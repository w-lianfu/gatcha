import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';
import Size from '@tool/size';
import { toggleParties } from '@store/header';

interface IProps {}

const Parties = styled(Stack)({
  position: 'absolute',
  top: `${Size.header}rem`,
  width: '100%',
  paddingTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 55,
  backgroundColor: Color.white(0.9),
  borderBottom: `0.1rem solid ${Color.black(0.1)}`,
});
const ListBox = styled(Stack)({
  width: '100%',
  maxWidth: '1920px',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '2rem',
  boxSizing: 'border-box',
});
const PartyBox = styled(Box)({
  width: '30rem',
  height: '13rem',
  padding: '1rem 2rem',
  borderRadius: '1rem',
  marginLeft: '2rem',
  marginBottom: '3rem',
  // boxSizing: 'border-box',
  cursor: 'pointer',
  color: Color.white(1),
  backgroundColor: Color.black(0.6),
});

const PartiesBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Parties onMouseEnter={() => toggleParties(true)}
      onMouseLeave={() => toggleParties(false)}>
      <ListBox>
        <PartyBox onClick={() => navi('/parties-info')}>
          <Typography>About Parties</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/tangram')}>
          <Typography>Flushing</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/orlando-fl')}>
          <Typography>Orlando</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/saugus-ma')}>
          <Typography>Saugus</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/gallery')}>
          <Typography>Gallery</Typography>
        </PartyBox>
      </ListBox>
    </Parties>
  );
};

export default observer(PartiesBox);
