import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Stack, Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import StyledComp from 'styled-components';

import Color from '@tool/color';
import Size from '@tool/size';
import { toggleParties } from '@store/header';

interface IProps {}

const Parties = styled(Stack)({
  position: 'absolute',
  top: `${Size.header}rem`,
  width: '100%',
  paddingTop: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 55,
  backgroundColor: Color.white(0.9),
  borderBottom: `0.1rem solid ${Color.black(0.1)}`,
});
const ListBox = styled(Stack)({
  width: '100%',
  maxWidth: '1920px',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  alignItems: 'center',
  paddingLeft: '2rem',
  boxSizing: 'border-box',
});
const PartyBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '30rem',
  height: '13rem',
  padding: '1rem',
  borderRadius: '1rem',
  marginLeft: '2rem',
  marginBottom: '3rem',
  // boxSizing: 'border-box',
  cursor: 'pointer',
  color: Color.white(1),
  backgroundColor: Color.black(0.6),
});
const ImgItem = StyledComp.div`
  display: flex;
  width: 26rem;
  height: 8rem;
`;
const ImgItem1 = StyledComp(ImgItem)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582118f11a8e5e14bf79c2_Untitled%20design.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const ImgItem2 = StyledComp(ImgItem)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66581c863def80e0515608ae_Orlando.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const ImgItem3 = StyledComp(ImgItem)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/6658207d8355e838a231e3aa_IMG_7439_jpg-p-2000.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const ImgItem4 = StyledComp(ImgItem)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66581fa1dc832b7744685466_Saugus-p-1600.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});
const ImgItem5 = StyledComp(ImgItem)({
  backgroundImage: 'url("https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/6657fffebb76a1a4fddd248b_0914-3-2-p-1600.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
});

const PartiesBox = (props: IProps) => {
  const navi = useNavigate();

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <Parties onMouseEnter={() => toggleParties(true)}
      onMouseLeave={() => toggleParties(false)}>
      <ListBox>
        <PartyBox onClick={() => navi('/parties-info')}>
          <ImgItem1 />
          <Typography>About Parties</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/stores/tangram')}>
          <ImgItem2 />
          <Typography>Flushing</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/stores/orlando-fl')}>
          <ImgItem3 />
          <Typography>Orlando</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/stores/saugus-ma')}>
          <ImgItem4 />
          <Typography>Saugus</Typography>
        </PartyBox>
        <PartyBox onClick={() => navi('/gallery')}>
          <ImgItem5 />
          <Typography>Gallery</Typography>
        </PartyBox>
      </ListBox>
    </Parties>
  );
};

export default observer(PartiesBox);
