import { Route } from 'wouter';
import MainRenderBlock from './components/mainRender';
import ComissionBlock from './components/comissionBlock';
import ThankyouBlock from './components/thankyou';
import './App.css';

function App() {
  return (
    <>
      <Route path='/' component={MainRenderBlock} />
      <Route path='/commissions' component={ComissionBlock} />
      <Route path='/thankyou' component={ThankyouBlock} />
    </>
  );
}

export default App;
