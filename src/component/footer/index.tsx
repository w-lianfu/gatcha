import { useEffect } from 'react';
import { NavLink } from 'react-router';
import { Paper, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({});
const DStack = styled(Stack)({});

const Footer = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <DPaper>
      <DStack>
        <Typography variant="h2">Footer</Typography>
      </DStack>
    </DPaper>
  );
};

export default Footer;
