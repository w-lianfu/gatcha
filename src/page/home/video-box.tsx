import { useEffect, useState, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import ReactPlayer from 'react-player';

import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({
  position: 'relative',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 50,
  top: '-150px',
});

const VideoBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DStack>
      <ReactPlayer url="https://cdn.prod.website-files.com/6657d5e13962708bf80347e8%2F66582388539124f6d1784c1d_64f8532eb953222f9c0ec6e4_Untitled-transcode.mp4"
        playing={true} loop={true} controls={true} width="1180px" height="600px" />
    </DStack>
  );
};

export default observer(VideoBox);
