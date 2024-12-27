import { observable, action, runInAction } from 'mobx';

const moHeader = observable({
  partiesShow: false,
  locationShow: false,
  menuShow: false,
});

const toggleParties = action((isShow: boolean) => {
  moHeader.partiesShow = isShow;
});

const toggleLocation = action((isShow: boolean) => {
  moHeader.locationShow = isShow;
});

const toggleMenu = action((isShow: boolean) => {
  moHeader.menuShow = isShow;
});

export default moHeader;
export { toggleParties, toggleLocation, toggleMenu };
