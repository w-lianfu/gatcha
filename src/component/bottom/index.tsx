import { useEffect } from 'react';
import { NavLink, Link } from 'react-router';
import { Stack, Box, Typography, IconButton } from '@mui/material';
import { styled } from '@mui/system';

import Color from '@tool/color';
import Size from '@tool/size';
import { LinkButton } from '@styled/index';
import RedbookLogo from '@icon/redbook.svg';
import InstagramLogo from '@icon/instagram.svg';
import LinkedinLogo from '@icon/linkedin.svg';

interface IProps {}

const WideStack = styled(Stack)({
  width: '100%',
  height: '5rem',
  alignItems: 'center',
  borderTop: `0.1rem solid ${Color.black(0.1)}`,
});
const DStack = styled(Stack)({
  width: '100%',
  height: '100%',
  maxWidth: Size.maxWidth,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
});
const DBox = styled(Box)({
  flex: 1,
  justifyContent: 'flex-end',
  paddingRight: '10rem',
});
const EBox = styled(Box)({
  marginRight: '3rem',
});
const DIconButton = styled(IconButton)({
  height: '5rem',
  width: '5rem',
  marginRight: '2rem',
});

const Bottom = (props: IProps) => {
  useEffect(() => {
    return () => {};
  }, []);

  const onLink = (name: string) => {
    if (name === 'redbook') {
      window.open('https://www.xiaohongshu.com/explore');
    } else if (name === 'instagram') {
      window.open('https://www.instagram.com/gatchausa/?hl=en');
    } else if (name === 'linkedin') {
      window.open('https://www.linkedin.com/company/gatchausa');
    }
  };

  return (
    <WideStack>
      <DStack>
        <DBox>
          <DIconButton onClick={() => onLink('redbook')}>
            <img src={RedbookLogo} width="26px" />
          </DIconButton>
          <DIconButton onClick={() => onLink('instagram') }>
            <img src={InstagramLogo} width="26px" />
          </DIconButton>
          <DIconButton onClick={() => onLink('linkedin')}>
            <img src={LinkedinLogo} width="26px" />
          </DIconButton>
        </DBox>
        <EBox>
          <NavLink to="/">
            <LinkButton>DESIGNED BY GATCHA LLC. ALL RIGHTS RESERVED</LinkButton>
          </NavLink>
        </EBox>
      </DStack>
    </WideStack>
  );
};

export default Bottom;
