import { useEffect } from 'react';
import { Paper, Stack, Button } from '@mui/material';
import { styled } from '@mui/system';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Home = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <h1>Home Page</h1>
      <DStack>
        <Button variant="contained" color="primary">Hello</Button>
        <Button variant="contained" color="secondary">Hello</Button>
        <Button variant="contained" color="success">Hello</Button>
        <Button variant="contained" color="info">Hello</Button>
        <Button variant="contained" color="warning">Hello</Button>
        <Button variant="contained" color="error">Hello</Button>
        <Button variant="contained" color="black">Hello</Button>
        <Button variant="contained" disabled>Hello</Button>
      </DStack>
      <DStack>
        <Button variant="outlined" color="primary">Hello</Button>
        <Button variant="outlined" color="secondary">Hello</Button>
        <Button variant="outlined" color="success">Hello</Button>
        <Button variant="outlined" color="info">Hello</Button>
        <Button variant="outlined" color="warning">Hello</Button>
        <Button variant="outlined" color="error">Hello</Button>
        <Button variant="outlined" color="black">Hello</Button>
      </DStack>
      <DStack>
        <Button color="primary">Hello</Button>
        <Button color="secondary">Hello</Button>
        <Button color="success">Hello</Button>
        <Button color="info">Hello</Button>
        <Button color="warning">Hello</Button>
        <Button color="error">Hello</Button>
      </DStack>
    </DPaper>
  );
};

export default Home;
