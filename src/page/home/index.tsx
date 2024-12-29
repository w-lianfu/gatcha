import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Size from '@tool/size';
import AppDial from '@con/app-dial';
import Header from '@comp/header/index';
import Footer from '@comp/footer/index';
import Bottom from '@comp/bottom/index';
import ImgSlick from './img-slick';
import VideoBox from './video-box';
import ItemBox from './item-box';
import LinkAddress from './link-address';
import ItemList from './item-list';

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
          <ItemList />
          <LinkAddress />
        </FPaper>
      </EPaper>
      <Footer />
      <Bottom />
    </DPaper>
  );
};

export default observer(Home);
