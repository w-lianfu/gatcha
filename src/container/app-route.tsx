import { HashRouter, Routes, Route } from 'react-router';

import Home from '@page/home/index';
import PartiesInfo from '@page/parties-info/index';
import Gallery from '@page/gallery/index';
import ViewerGallery from '@page/viewer-gallery/index';
import Stores from '@page/stores/index';
import About from '@page/about/index';
import Contact from '@page/contact/index';

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
        <Route path="stores" element={<Stores />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </HashRouter>
  );
};

export default AppRoute;
