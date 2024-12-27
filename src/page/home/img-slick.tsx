import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Box, Typography } from '@mui/material';
// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import Slider from 'react-slick';
// import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

// import '@lib/react-slick/slick.scss';
// import '@lib/react-slick/slick-theme.scss';
import Color from '@tool/color';

interface IProps {}

const ImgBox = styled.div`
  position: relative;
  height: 800px;
  width: 100%;
  cursor: pointer;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;
const ImgBox1 = styled(ImgBox)`
  background-image: url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582e940b984d47f0630d5d__7IV0222.jpg");
`;
const ImgBox2 = styled(ImgBox)`
  background-image: url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/6657fe2fb0ed2035fbfb2734__7IV0226-2.jpg");
`;
const ImgBox3 = styled(ImgBox)`
  background-image: url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8%2F665849eef9b93b79aa3000e0_Or-poster-00001.jpg");
`;
const ImgBox4 = styled(ImgBox)`
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
        ...style, display: 'none',
        backgroundColor: Color.error(0),
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
        backgroundColor: Color.secondary(0),
      }} />
  );
};

const DBox = styled(Box)({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  left: 0,
  bottom: '150px',
  zIndex: 50,
  paddingBottom: '1rem',
  color: Color.white(1),
  backgroundColor: Color.black(0.6),
});

const ImgSlick = (props: IProps) => {
  const navi = useNavigate();
  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
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
        <ImgBox1 onClick={() => navi('/stores/tangram')}>
          <DBox>
            <Typography variant="h5">Flushing NY</Typography>
            <Typography variant="body1">Clawcade, Arcade, Cocktail Bar, Gatcha Shop</Typography>
          </DBox>
        </ImgBox1>
        <ImgBox2 onClick={() => navi('/stores/saugus-ma')}>
          <DBox>
            <Typography variant="h5">Orlando FL</Typography>
            <Typography variant="body1">Clawcade, Arcade, Cocktail Bar, Gatcha Shop</Typography>
          </DBox>
        </ImgBox2>
        <ImgBox3 onClick={() => navi('/stores/orlando-fl')}>
          <DBox>
            <Typography variant="h5">Saugus MA</Typography>
            <Typography variant="body1">Clawcade, Arcade, Cocktail Bar, Gatcha Shop</Typography>
          </DBox>
        </ImgBox3>
        <ImgBox4 onClick={() => navi('/stores/edison-nj')}>
          <DBox>
            <Typography variant="h5">Edison NJ</Typography>
            <Typography variant="body1">Clawcade, Arcade, Cocktail Bar, Gatcha Shop</Typography>
          </DBox>
        </ImgBox4>
      </Slider>
    </SlickBox>
  );
};

export default ImgSlick;
