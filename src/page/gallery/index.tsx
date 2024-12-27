import { useEffect, useRef, useState, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import {
  Paper, Stack, Box, Button, Typography,
  ImageList, ImageListItem, Modal, IconButton,
} from '@mui/material';
import { styled } from '@mui/system';
import { MdClose } from 'react-icons/md';
import Viewer from 'viewerjs';

import '@lib/viewer/viewer.scss';
import Color from '@tool/color';

interface IProps {}

const DPaper = styled(Paper)({
  width: '100%',
  padding: '3rem 5rem',
  boxSizing: 'border-box',
});
const DStack = styled(Stack)({
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '& img': {
    maxWidth: '90%',
    maxHeight: '90%',
  },
});
const DItem = styled(ImageListItem)({
  cursor: 'pointer',
});
const DModal = styled(Modal)({
  backdropFilter: 'blur(6px)',
  backgroundColor: Color.black(0.5),
});
const DIconButton = styled(IconButton)({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  fontSize: '4rem',
});

const imageData = [
  {
    key: 1, title: 'Flushing NY', url: 'https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582e940b984d47f0630d5d__7IV0222.jpg',
  },
  {
    key: 2, title: 'Edison NJ', url: 'https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66582d5963b40e4b2bcbd08d__7IV0203.jpg',
  },
  {
    key: 3, title: 'Orlando FL', url: 'https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584689468a31ece37450f2_0914-7.jpg',
  },
  {
    key: 4, title: 'Saugus MA', url: 'https://cdn.prod.website-files.com/6657d5e13962708bf80347e8%2F665849eef9b93b79aa3000e0_Or-poster-00001.jpg',
  },
  {
    key: 5, title: 'demo001', url: 'https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584b395b2ae048797af19b__7IV9268.jpg',
  },
  {
    key: 6, title: 'demo002', url: 'https://cdn.prod.website-files.com/6657d5e13962708bf80347e8/66584abd1c39fa9b3d37656d__7IV8914.jpg',
  },
  {
    key: 7, title: 'demo003', url: 'https://images.unsplash.com/photo-1731902062648-260a1b5067a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 8, title: 'demo004', url: 'https://images.unsplash.com/photo-1732951363017-caed335fb4ce?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 9, title: 'demo005', url: 'https://plus.unsplash.com/premium_photo-1733230683076-da46320fb8a2?q=80&w=1550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 10, title: 'demo006', url: 'https://plus.unsplash.com/premium_photo-1734275012690-6d3006fba036?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 11, title: 'demo007', url: 'https://images.unsplash.com/photo-1732740674513-63afb262a988?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 12, title: 'demo008', url: 'https://images.unsplash.com/photo-1734279135113-8bd58bc02b69?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 13, title: 'demo009', url: 'https://images.unsplash.com/photo-1733178262883-18a3080e7a5e?q=80&w=1548&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 14, title: 'demo010', url: 'https://plus.unsplash.com/premium_photo-1661948404806-391a240d6d40?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 15, title: 'demo011', url: 'https://plus.unsplash.com/premium_photo-1661936414165-3039a8d906f9?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    key: 16, title: 'demo012', url: 'https://media.gettyimages.com/id/613254398/photo/cityscape-songpagu-skyscrapers-lotte-world-tower-at-night-seoul.jpg?s=2048x2048&w=gi&k=20&c=bUdSJdqlS6gQJ9K5RYOa7JJtthNrzVfI5JHO2LGhpNs=',
  },
  {
    key: 17, title: 'demo013', url: 'https://images.pexels.com/photos/2376710/pexels-photo-2376710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    key: 18, title: 'demo014', url: 'https://media.gettyimages.com/id/455242307/photo/old-fortress-gate-with-light-trails-at-downtown.jpg?s=1024x1024&w=gi&k=20&c=IyrD-b4LS5ojhKKcV5_mIyCldRR89_0ytx-d6qjwoI4=',
  },
  {
    key: 19, title: 'demo015', url: 'https://media.gettyimages.com/id/1455247670/photo/namsan-seoul-tower.jpg?s=2048x2048&w=gi&k=20&c=kGXhGCg1Ts-HJsBSlJCdvLWmFRHjbr3Z1KuGyy0pXb8=',
  },
  {
    key: 20, title: 'demo016', url: 'https://media.gettyimages.com/id/1200280547/photo/panorama-of-gangnam-city-at-night-seoul-south-korea.jpg?s=2048x2048&w=gi&k=20&c=H0VRCwhd16ggXUgKw3VT86ra7xFL0wAA-4xPNxEFfYQ=',
  },
  {
    key: 21, title: 'demo017', url: 'https://media.gettyimages.com/id/1441083322/photo/mt-fuji-and-tokyo-skyline.jpg?s=2048x2048&w=gi&k=20&c=DZ4rpwmAQAcaDvpCmwAuWDE2Kflc_TBS0mAkspKhVu4=',
  },
];

const Gallery = (props: IProps) => {
  const navi = useNavigate();
  const [isModal, setModal] = useState(false);
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    return () => {};
  }, []);

  const onImg = (key: number, currentUrl: string) => {
    console.log('title -- ', currentUrl);
    setCurrentUrl(currentUrl);
    setModal(true);
    // new Viewer(document.getElementById(`imageItem${key}`) as HTMLElement, {});
  };

  const onNothing = (ev: SyntheticEvent) => {
    ev.stopPropagation();
  };

  const onClose = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    setModal(false);
  };

  return (
    <DPaper>
      <Typography variant="h1">Gallery Page</Typography>
      <Button onClick={() => navi('/')}>to Home</Button>
      <ImageList variant="masonry" cols={3} gap={8}>
        {imageData.map((item: any, index: number) => (
          <DItem id={`imageItem${item.key}`} key={item.key}
            onClick={() => onImg(item.key, item.url)}>
            <img src={item.url} alt={item.title} />
          </DItem>
        ))}
      </ImageList>

      <DModal open={isModal}>
        <DStack onClick={() => setModal(false)}>
          {currentUrl ? (
            <img src={currentUrl} alt="hello"
              onClick={(ev: SyntheticEvent) => onNothing(ev)}
              className="animate__animated animate__zoomInDown" />
          ) : null}
          <DIconButton onClick={(ev: SyntheticEvent) => onClose(ev)}>
            <MdClose color={Color.white(1)} />
          </DIconButton>
        </DStack>
      </DModal>
    </DPaper>
  );
};

export default observer(Gallery);
