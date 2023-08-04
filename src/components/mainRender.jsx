import { block } from 'million/react';
import MainBlock from './mainBlock';

const MainRenderBlock = block(function RenderBlock() {
  return (
    <>
      <MainBlock />
    </>
  );
});

export default MainRenderBlock;
