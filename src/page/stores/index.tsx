import { useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Stores = (props: IProps) => {
  const navi = useNavigate();
  const [params] = useSearchParams();
  const storeName = params.get('storeName') || '';

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Typography variant="h1">Stores Page, {storeName}</Typography>
      <Button onClick={() => navi('/')}>to Home</Button>
    </DPaper>
  );
};

export default observer(Stores);
