import { useEffect, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Button, Typography } from '@mui/material';
// import { styled } from '@mui/system';
import styled from 'styled-components';
import Slider from 'react-slick';

import Color from '@tool/color';

interface IProps {}

const ItemSection = styled.div`
  position: relative;
  width: 1200px;
  height: 500px;
  margin-top: 3rem;
  margin-bottom: 4rem;
`;
const Item = styled.section`
  position: relative;
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 96% !important;
  height: 500px;
  padding: 2rem 5rem;
  box-sizing: border-box;
  color: ${Color.white(1)};
  border: 4px solid ${Color.black(0)};
  background-color: ${Color.black(0.6)};

  &:hover {
    border: 4px solid ${Color.black(1)};
    background-color: ${Color.black(0.7)};
  }
`;
const Desc = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
`;

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}
      style={{
        ...style, display: 'flex',
        // backgroundColor: Color.secondary(1),
      }} />
  );
};
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}
      style={{
        ...style, display: 'flex',
        color: Color.primary(1),
        // backgroundColor: Color.secondary(1),
      }} />
  );
};
const ImgBox = styled.div`
  width: 100%;
  height: 300px;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ImgBox1 = styled(ImgBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg")',
});
const ImgBox2 = styled(ImgBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582e940b984d47f0630d5d__7IV0222.jpg")',
});
const ImgBox3 = styled(ImgBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584689468a31ece37450f2_0914-7.jpg")',
});
const ImgBox4 = styled(ImgBox)({
  backgroundImage: 'url("https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
});
const ImgBox5 = styled(ImgBox)({
  backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1722795151311-f4f38a3b2b61?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
});

const ItemBox = (props: IProps) => {
  const navi = useNavigate();
  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const itemSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    dotsClass: 'slick-dots custom-items',
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    appendDots: (dots: any) => (
      <section>
        <ul className="item-dots">{dots}</ul>
      </section>
    ),
    customPaging: (i: number) => (
      <i className="little-item" />
    ),
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ItemSection>
      <Slider {...itemSettings}>
        <Item onMouseEnter={() => setHover1(true)} onMouseLeave={() => setHover1(false)}>
          <ImgBox1 className={[hover1 ? 'animate__animated animate__pulse': ''].join(',')} />
          <Desc>
            <Typography variant="h5">Clawcade</Typography>
            <Typography variant="body1">Gatcha Clawcade, we design and manufacture all of our industry leading machines in house!</Typography>
          </Desc>
        </Item>
        <Item onMouseEnter={() => setHover2(true)} onMouseLeave={() => setHover2(false)}>
          <ImgBox2 className={[hover2 ? 'animate__animated animate__pulse': ''].join(',')} />
          <Desc>
            <Typography variant="h5">Arcade</Typography>
            <Typography variant="body1">The Arcade, we handpick our games to ensure the best experience, our skilled team makes sure everything is well maintained!</Typography>
          </Desc>
        </Item>
        <Item onMouseEnter={() => setHover3(true)} onMouseLeave={() => setHover3(false)}>
          <ImgBox3 className={[hover3 ? 'animate__animated animate__pulse': ''].join(',')} />
          <Desc>
            <Typography variant="h5">Gatcha Shop</Typography>
            <Typography variant="body1">Explore our shop! Where everything is available for trade-in. Ft. Giant Plush, Gundams, Anime Figures, and tons of Blind Boxes!</Typography>
          </Desc>
        </Item>
        <Item onMouseEnter={() => setHover4(true)} onMouseLeave={() => setHover4(false)}>
          <ImgBox4 className={[hover4 ? 'animate__animated animate__pulse': ''].join(',')} />
          <Desc>
            <Typography variant="h5">Mock 111</Typography>
            <Typography variant="body1">Mock 111 Mock 111 Mock 111</Typography>
          </Desc>
        </Item>
        <Item onMouseEnter={() => setHover5(true)} onMouseLeave={() => setHover5(false)}>
          <ImgBox5 className={[hover5 ? 'animate__animated animate__pulse': ''].join(',')} />
          <Desc>
            <Typography variant="h5">Mock 222</Typography>
            <Typography variant="body1">Mock 222 Mock 222 Mock 222</Typography>
          </Desc>
        </Item>
      </Slider>
    </ItemSection>
  );
};

export default observer(ItemBox);
