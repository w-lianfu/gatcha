import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({
  width: '100%',
  backgroundColor: Color.secondary(0.5),
});
const DStack = styled(Stack)({});

const ItemBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Typography variant="h1">ItemBox Page</Typography>
    </DPaper>
  );
};

export default observer(ItemBox);
