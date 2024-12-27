import { HashRouter, Routes, Route } from 'react-router';

import Home from '@page/home/index';
import PartiesInfo from '@page/parties-info/index';
import Gallery from '@page/gallery/index';
import ViewerGallery from '@page/viewer-gallery/index';
import Stores from '@page/stores/index';
import Tangram from '@page/stores/tangram/index';
import SaugusMa from '@page/stores/saugus-ma/index';
import OrlandoFL from '@page/stores/orlando-fl/index';
import EdisonNJ from '@page/stores/edison-nj/index';

interface IProps {}

const AppRoute = (props: IProps) => {
  return (
    <HashRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="parties-info" element={<PartiesInfo />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="viewer-gallery" element={<ViewerGallery />} />
        <Route path="stores" element={<Stores />}>
          <Route path="tangram" element={<Tangram />} />
          <Route path="saugus-ma" element={<SaugusMa />} />
          <Route path="orlando-fl" element={<OrlandoFL />} />
          <Route path="edison-nj" element={<EdisonNJ />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoute;
