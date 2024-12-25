import { useEffect } from 'react';
import { Button } from '@mui/material';

interface IProps {}

const Home = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
      <Button variant="contained" color="primary">Hello</Button>
      <Button variant="contained" color="secondary">Hello</Button>
      <Button variant="contained" color="success">Hello</Button>
      <Button variant="contained" color="info">Hello</Button>
      <Button variant="contained" color="warning">Hello</Button>
      <Button variant="contained" color="error">Hello</Button>
    </div>
  );
};

export default Home;
