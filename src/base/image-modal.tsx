import { useEffect, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router';
import { observer } from 'mobx-react-lite';
import { Modal, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { MdClose } from 'react-icons/md';

import Color from '@tool/color';
import moGlobal, {
  toggleImageModal, setImageUrl,
} from '@store/global';

interface IProps {}

const DModal = styled(Modal)({
  backdropFilter: 'blur(6px)',
  backgroundColor: Color.black(0.5),
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
const DIconButton = styled(IconButton)({
  position: 'absolute',
  top: '1rem',
  right: '1rem',
  fontSize: '4rem',
});

const Tangram = (props: IProps) => {
  const navi = useNavigate();
  const { imageModal, imageUrl } = moGlobal;

  useEffect(() => {
    return () => {};
  }, []);

  const onNothing = (ev: SyntheticEvent) => {
    ev.stopPropagation();
  };

  const onClose = (ev: SyntheticEvent) => {
    ev.stopPropagation();
    toggleImageModal(false);
  };

  return (
    <DModal open={imageModal}>
      <DStack onClick={() => toggleImageModal(false)}>
        {imageUrl ? (
          <img src={imageUrl} onClick={(ev: SyntheticEvent) => onNothing(ev)}
            className="animate__animated animate__zoomInDown" />
        ) : null}
        <DIconButton onClick={(ev: SyntheticEvent) => onClose(ev)}>
          <MdClose color={Color.white(1)} />
        </DIconButton>
      </DStack>
    </DModal>
  );
};

export default observer(Tangram);
