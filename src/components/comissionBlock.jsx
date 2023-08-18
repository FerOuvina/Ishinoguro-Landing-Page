import { block } from 'million/react';
import ArtworkBlock from './artworkBlock';
import TOSBlock from './TOSBlock';
import CommissionFormBlock from './comissionFormBlock';
import '../stylesheets/comissionBlock.css';

const ComissionBlock = block(function Comission() {
  return (
    <div className='comissionContainer'>
      <TOSBlock />
      <ArtworkBlock />
      <CommissionFormBlock />
    </div>
  );
});

export default ComissionBlock;
