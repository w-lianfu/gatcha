import React, { useEffect } from 'react';
import { Paper } from '@mui/material';
// import { styled } from '@mui/material/styles';
import styled from 'styled-components';
import { Carousel } from 'antd';
import Slider from 'react-slick';
import { Swiper, SwiperSlide } from 'swiper/react';

import '@lib/react-slick/slick.scss';
import '@lib/react-slick/slick-theme.scss';

interface IProps {}

const ImgBox = styled.div`
  height: 800px;
  width: 100%;
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

const ImgSlick = (props: IProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <section style={{
      position: 'relative',
      width: '100%',
      height: '800px',
      overflow: 'hidden',
    }}>
      <Slider {...settings}>
        <ImgBox1 />
        <ImgBox2 />
        <ImgBox3 />
      </Slider>
    </section>
  );
};

export default ImgSlick;
