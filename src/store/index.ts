import { observable, action, runInAction } from 'mobx';

const Hello = observable({
  num: 0,
});

const numIncrease = action(() => {
  Hello.num += 1;
});

const numDecrease = action(() => {
  Hello.num -= 1;
});

export default Hello;
export { numIncrease, numDecrease };
