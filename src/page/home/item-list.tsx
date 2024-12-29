import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import CStyled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import Color from '@tool/color';
import Image11 from '@image/11.jpg';
import Image13 from '@image/13.jpg';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});
const ItemSection = CStyled.section`
  width: 1200px;
`;

const ItemList = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <ItemSection>
      <Swiper spaceBetween={30} slidesPerView={4} navigation={true}
        modules={[Navigation, Pagination, A11y]} loop={true}
        onSlideChange={() => {}} onSwiper={(swiper: any) => {}}>
        <SwiperSlide>
          <img src={Image11} alt="image11" width="300px" height="130px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image13} alt="image11" width="300px" height="130px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image11} alt="image11" width="300px" height="130px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image13} alt="image11" width="300px" height="130px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image11} alt="image11" width="300px" height="130px" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Image13} alt="image11" width="300px" height="130px" />
        </SwiperSlide>
      </Swiper>
    </ItemSection>
  );
};

export default observer(ItemList);
