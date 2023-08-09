import { block } from 'million/react';
import MainBlock from './mainBlock';
import GalleryBlock from './galleryBlock';

const MainRenderBlock = block(function RenderBlock() {
  return (
    <>
      <MainBlock />
      <GalleryBlock />
    </>
  );
});

export default MainRenderBlock;
