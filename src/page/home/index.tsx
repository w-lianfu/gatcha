import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Hello, {
  numIncrease, numDecrease,
} from '@store/index';
import Header from '@comp/header/index';
import Footer from '@comp/footer/index';
import Bottom from '@comp/bottom/index';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Home = (props: IProps) => {
  const { num } = Hello;

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
        <Typography>Number: {num}</Typography>
        <Button variant="contained" color="warning"
          onClick={() => numIncrease()}>Number Increase
        </Button>
        <Button variant="contained" color="error"
          onClick={() => numDecrease()}>Number Decrease
        </Button>
        <Button variant="contained" color="black">Hello</Button>
        <Button variant="contained" disabled>Hello</Button>
      </DStack>
      <Footer />
      <Bottom />
    </DPaper>
  );
};

export default observer(Home);
