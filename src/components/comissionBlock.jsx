import { block } from 'million/react';
import { Route } from 'wouter';
import ArtworkBlock from './artworkBlock';
import TOSBlock from './TOSBlock';
import CommissionFormBlock from './comissionFormBlock';
import '../stylesheets/comissionBlock.css';

const ComissionBlock = block(function Comission() {
  return (
    <Route path='/comissions'>
      <div className='comissionContainer'>
        <TOSBlock />
        <ArtworkBlock />
        <CommissionFormBlock />
      </div>
    </Route>
  );
});

export default ComissionBlock;
