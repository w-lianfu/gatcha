import { observable, action, runInAction } from 'mobx';

const moGlobal = observable({
  imageModal: false,
  imageUrl: '',
});

const toggleImageModal = action((isModal: boolean) => {
  moGlobal.imageModal = isModal;
});

const setImageUrl = action((imageUrl: string) => {
  moGlobal.imageUrl = imageUrl;
});

export default moGlobal;
export { toggleImageModal, setImageUrl };
