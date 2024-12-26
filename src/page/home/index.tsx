import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import '@lib/react-slick/slick.scss';
import '@lib/react-slick/slick-theme.scss';
import Size from '@tool/size';
import Hello, { numIncrease, numDecrease } from '@store/index';
import Header from '@comp/header/index';
import Footer from '@comp/footer/index';
import Bottom from '@comp/bottom/index';
import ImgSlick from './img-slick';
import VideoBox from './video-box';
import ItemBox from './item-box';

interface IProps {}

const DPaper = styled(Paper)({
  width: '100%',
  minWidth: '1200px',
  alignItems: 'center',
  overflowX: 'hidden',
});
const EPaper = styled(Paper)({
  width: '100%',
  maxWidth: Size.maxWidth,
});
const FPaper = styled(Paper)({
  width: '100%',
  top: '-150px',
  marginBottom: '-120px',
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  // zIndex: 50,
});
const DStack = styled(Stack)({});

const Home = (props: IProps) => {
  const { num } = Hello;

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <Header />
      <EPaper>
        <ImgSlick />
        <VideoBox />
        <FPaper>
          <ItemBox />
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
        </FPaper>
      </EPaper>
      <Footer />
      <Bottom />
    </DPaper>
  );
};

export default observer(Home);
