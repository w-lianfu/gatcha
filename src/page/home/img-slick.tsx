import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import Slider from 'react-slick';
// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

import '@lib/react-slick/slick.scss';
import '@lib/react-slick/slick-theme.scss';
import Color from '@tool/color';

interface IProps {}

const ImgBox = styled.div`
  height: 800px;
  width: 100%;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ImgBox1 = styled(ImgBox)`
  background-image: url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584689468a31ece37450f2_0914-7.jpg");
`;
const ImgBox2 = styled(ImgBox)`
  background-image: url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582e940b984d47f0630d5d__7IV0222.jpg");
`;
const ImgBox3 = styled(ImgBox)`
  background-image: url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg");
`;
const SlickBox = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  overflow: hidden;
`;

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}
      style={{
        ...style, display: 'flex',
        backgroundColor: Color.error(1),
      }} />
  );
};
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div className={className} onClick={onClick}
      style={{
        ...style, display: 'flex',
        backgroundColor: Color.secondary(1),
      }} />
  );
};

const ImgSlick = (props: IProps) => {
  const navi = useNavigate();
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: 'slick-dots custom-dots',
    appendDots: (dots: any) => (
      <section>
        <ul className="custom-dot">{dots}</ul>
      </section>
    ),
    customPaging: (i: number) => (
      <i className="little-dot" />
    ),
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <SlickBox>
      <Slider {...slickSettings}>
        <ImgBox1 onClick={() => navi('/tangram')} />
        <ImgBox2 onClick={() => navi('/tangram')} />
        <ImgBox3 onClick={() => navi('/tangram')} />
      </Slider>
    </SlickBox>
  );
};

export default ImgSlick;
