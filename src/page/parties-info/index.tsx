import { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const PartiesInfo = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <h1>Parties Info Page</h1>
      <NavLink to="/home">
        <Button variant="contained" color="black">To Home</Button>
      </NavLink>
      <DStack>
        <Button variant="contained" color="primary">Welcome to Gatcha</Button>
        <Button variant="contained" color="secondary">Welcome to Gatcha</Button>
        <Button variant="contained" color="success">Welcome to Gatcha</Button>
        <Button variant="contained" color="info">Welcome to Gatcha</Button>
        <Button variant="contained" color="warning">Welcome to Gatcha</Button>
        <Button variant="contained" color="error">Welcome to Gatcha</Button>
      </DStack>
      <DStack>
        <Button variant="outlined" color="primary">Welcome to Gatcha</Button>
        <Button variant="outlined" color="secondary">Welcome to Gatcha</Button>
        <Button variant="outlined" color="success">Welcome to Gatcha</Button>
        <Button variant="outlined" color="info">Welcome to Gatcha</Button>
        <Button variant="outlined" color="warning">Welcome to Gatcha</Button>
        <Button variant="outlined" color="error">Welcome to Gatcha</Button>
      </DStack>
      <DStack>
        <Button color="primary">Welcome to Gatcha</Button>
        <Button color="secondary">Welcome to Gatcha</Button>
        <Button color="success">Welcome to Gatcha</Button>
        <Button color="info">Welcome to Gatcha</Button>
        <Button color="warning">Welcome to Gatcha</Button>
        <Button color="error">Welcome to Gatcha</Button>
      </DStack>
    </DPaper>
  );
};

export default observer(PartiesInfo);
