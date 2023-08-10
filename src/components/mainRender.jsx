import { block } from 'million/react';
import MainBlock from './mainBlock';
import GalleryBlock from './galleryBlock';
import ContactBlock from './contactBlock';

const MainRenderBlock = block(function RenderBlock() {
  return (
    <>
      <MainBlock />
      <GalleryBlock />
      <ContactBlock />
    </>
  );
});

export default MainRenderBlock;
