import { HashRouter, Routes, Route } from 'react-router';

import Home from '@page/home/index';
import PartiesInfo from '@page/parties-info/index';
import Tangram from '@page/tangram/index';

interface IProps {}

const AppRoute = (props: IProps) => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/parties-info" element={<PartiesInfo />} />
        <Route path="/tangram" element={<Tangram />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoute;
