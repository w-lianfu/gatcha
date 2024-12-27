import { observable, action, runInAction } from 'mobx';

const moGlobal = observable({
  hello: 'hello',
});

export default moGlobal;
