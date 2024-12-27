import { HashRouter, Routes, Route } from 'react-router';

import Home from '@page/home/index';
import PartiesInfo from '@page/parties-info/index';
import Tangram from '@page/tangram/index';
import SaugusMa from '@page/saugus-ma/index';
import OrlandoFL from '@page/orlando-fl/index';
import EdisonNJ from '@page/edison-nj/index';
import Gallery from '@page/gallery/index';

interface IProps {}

const AppRoute = (props: IProps) => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/parties-info" element={<PartiesInfo />} />
        <Route path="/tangram" element={<Tangram />} />
        <Route path="/saugus-ma" element={<SaugusMa />} />
        <Route path="/orlando-fl" element={<OrlandoFL />} />
        <Route path="/edison-nj" element={<EdisonNJ />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoute;
