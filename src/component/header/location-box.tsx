import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Paper, Stack, Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/system';
import StyledComp from 'styled-components';

import Color from '@tool/color';
import Size from '@tool/size';
import { toggleLocation } from '@store/header';

interface IProps {}

const DPaper = styled(Paper)({
  position: 'absolute',
  top: `${Size.header}rem`,
  width: '100%',
  paddingTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '3rem',
  zIndex: 55,
  backgroundColor: Color.white(0.9),
  borderBottom: `0.1rem solid ${Color.black(0.1)}`,
});
const EPaper = styled(Paper)({
  width: '100%',
  maxWidth: '1920px',
  display: 'flex',
  flexWrap: 'wrap',
  padding: '0 3rem',
  boxSizing: 'border-box',
  backgroundColor: Color.white(0),
});
const DStack = styled(Stack)({});
const CBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
});
const TitleTypography = styled(Typography)({
  marginBottom: '1rem',
});
const DBox = styled(Box)({
  display: 'flex',
  width: '20rem',
  height: '8rem',
  marginRight: '2rem',
  borderRadius: '0.8rem',
  overflow: 'hidden',
  cursor: 'pointer',
});
const DBox1 = styled(DBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66581c863def80e0515608ae_Orlando.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const DBox2 = styled(DBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/6658207d8355e838a231e3aa_IMG_7439_jpg-p-2000.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const DBox3 = styled(DBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66581fa1dc832b7744685466_Saugus-p-1600.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const DBox4 = styled(DBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/6657fffebb76a1a4fddd248b_0914-3-2-p-1600.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const DTypography = styled(Typography)({
  width: '100%',
  height: '100%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(2px)',
  color: Color.white(1),
  backgroundColor: Color.black(0.6),
});
const PriceTypography = styled(Typography)({
  marginTop: '3rem',
  marginBottom: '1rem',
});
const PriceBox = styled(DBox)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/6657fffebb76a1a4fddd248b_0914-3-2-p-1600.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const LocationBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  const onStore = (link: string) => {
    toggleLocation(false);
    navi(link);
  };
  const onNY = () => {
    toggleLocation(false);
    window.open('https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584864f4a67979f5fd9d2c_Game%20Credits.jpg');
  };
  const onOthers = () => {
    toggleLocation(false);
    window.open('https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584931bcbbb63b28721cc7_Untitled%20design-2.jpg');
  };

  return (
    <DPaper onMouseEnter={() => toggleLocation(true)}
      onMouseLeave={() => toggleLocation(false)}>
      <EPaper>
        <DStack>
          <TitleTypography variant="h5">Locations</TitleTypography>
          <CBox>
            <DBox1 onClick={() => onStore('/stores?storeName=tangram')}>
              <DTypography variant="h6">Flushing NY</DTypography>
            </DBox1>
            <DBox2 onClick={() => onStore('/stores?storeName=saugus-ma')}>
              <DTypography variant="h6">Saugus MA</DTypography>
            </DBox2>
            <DBox3 onClick={() => onStore('/stores?storeName=orlando-fl')}>
              <DTypography variant="h6">Orlando FL</DTypography>
            </DBox3>
            <DBox4 onClick={() => onStore('/stores?storeName=edison-nj')}>
              <DTypography variant="h6">Edison NJ</DTypography>
            </DBox4>
          </CBox>
        </DStack>

        <DStack>
          <PriceTypography variant="h5">Pricing</PriceTypography>
          <CBox>
            <PriceBox onClick={() => onNY()}>
              <DTypography variant="h6">NY</DTypography>
            </PriceBox>
            <PriceBox onClick={() => onOthers()}>
              <DTypography variant="h6">All Locations</DTypography>
            </PriceBox>
          </CBox>
        </DStack>
      </EPaper>
    </DPaper>
  );
};

export default observer(LocationBox);
