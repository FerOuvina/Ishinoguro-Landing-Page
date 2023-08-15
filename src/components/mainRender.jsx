import { block } from 'million/react';
import { Route } from 'wouter';
import MainBlock from './mainBlock';
import GalleryBlock from './galleryBlock';
import ContactBlock from './contactBlock';

const MainRenderBlock = block(function RenderBlock() {
  return (
    <Route path='/'>
      <MainBlock />
      <GalleryBlock />
      <ContactBlock />
    </Route>
  );
});

export default MainRenderBlock;
