import { useEffect } from 'react';
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
  justify-content: space-around;
  width: 96% !important;
  height: 500px;
  padding: 1rem 5rem;
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
        ...style, display: 'none',
        backgroundColor: Color.secondary(1),
      }} />
  );
};
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}
      style={{
        ...style, display: 'none',
        color: Color.primary(1),
        backgroundColor: Color.secondary(1),
      }} />
  );
};

const ItemBox = (props: IProps) => {
  const navi = useNavigate();
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
        <Item>
          <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg" width="100%" />
          <Desc>
            <Typography variant="h5">Clawcade</Typography>
            <Typography variant="body1">Gatcha Clawcade, we design and manufacture all of our industry leading machines in house!</Typography>
          </Desc>
        </Item>
        <Item>
          <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg" width="100%" />
          <Desc>
            <Typography variant="h5">Arcade</Typography>
            <Typography variant="body1">The Arcade, we handpick our games to ensure the best experience, our skilled team makes sure everything is well maintained!</Typography>
          </Desc>
        </Item>
        <Item>
          <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg" width="100%" />
          <Desc>
            <Typography variant="h5">Gatcha Shop</Typography>
            <Typography variant="body1">Explore our shop! Where everything is available for trade-in. Ft. Giant Plush, Gundams, Anime Figures, and tons of Blind Boxes!</Typography>
          </Desc>
        </Item>
        <Item>
          <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg" width="100%" />
          <Desc>
            <Typography variant="h5">Mock 111</Typography>
            <Typography variant="body1">Mock 111 Mock 111 Mock 111</Typography>
          </Desc>
        </Item>
        <Item>
          <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg" width="100%" />
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
