import { useEffect, useRef } from 'react';
import {
  Stack, Box, Button, Typography, IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import Viewer from 'viewerjs';
import {
  MdOutlineArrowBackIos, MdOutlineArrowForwardIos,
} from 'react-icons/md';

import Color from '@tool/color';

interface IProps {}

const DStack = styled(Stack)({
  height: '800px',
  width: '100%',
});
const EStack = styled(Stack)({
  width: '100%',
  overflow: 'hidden',

  '& img': { width: '100%' },
});
const BaseIconButton = styled(IconButton)({
  position: 'absolute',
  top: '40%',
  width: '5rem',
  height: '6rem',
  zIndex: 50,
  borderRadius: 0,
  backgroundColor: Color.primary(1),

  '&:hover': { backgroundColor: Color.primary(1) },
});
const DIconButton = styled(BaseIconButton)({
  left: 0,
});
const EIconButton = styled(BaseIconButton)({
  right: 0,
});

const Slick = (props: IProps) => {
  const viewerRef = useRef(null);

  useEffect(() => {
    // if (viewerRef.current) {
    //   console.log('hello');
    //   new Viewer(viewerRef.current, {
    //     inline: true,
    //   });
    // }

    return () => {};
  }, []);

  return (
    <DStack ref={viewerRef}>
      <EStack>
        <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584689468a31ece37450f2_0914-7.jpg" />
        <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582e940b984d47f0630d5d__7IV0222.jpg" />
        <img src="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg" />
      </EStack>
      <DIconButton>
        <MdOutlineArrowBackIos color={Color.white(1)} />
      </DIconButton>
      <EIconButton>
        <MdOutlineArrowForwardIos color={Color.white(1)} />
      </EIconButton>
    </DStack>
  );
};

export default Slick;
