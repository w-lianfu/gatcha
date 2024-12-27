import { observable, action, runInAction } from 'mobx';

const moHome = observable({
  partiesShow: false,
  locationShow: false,
});

const toggleParties = action((isShow: boolean) => {
  moHome.partiesShow = !isShow;
});

const toggleLocation = action((isShow: boolean) => {
  moHome.locationShow = !isShow;
});

export default moHome;
export { toggleParties, toggleLocation };
