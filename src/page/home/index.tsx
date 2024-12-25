import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { Paper, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Header from '@comp/header/index';
import Footer from '@comp/footer/index';
interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Home = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Header />
      <h1>Home Page</h1>
      <DStack>
        <NavLink to="/parties-info">
          <Button variant="contained" color="primary">To Parties-Info</Button>
        </NavLink>
        <Button variant="contained" color="secondary">Hello</Button>
        <Button variant="contained" color="success">Hello</Button>
        <Button variant="contained" color="info">Hello</Button>
        <Button variant="contained" color="warning">Hello</Button>
        <Button variant="contained" color="error">Hello</Button>
        <Button variant="contained" color="black">Hello</Button>
        <Button variant="contained" disabled>Hello</Button>
      </DStack>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Typography variant="h1">Welcome to Gatcha</Typography>
      <Footer />
    </DPaper>
  );
};

export default Home;
