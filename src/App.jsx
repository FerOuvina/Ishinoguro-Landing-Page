import { Route } from 'wouter';
import MainRenderBlock from './components/mainRender';
import TOSBlock from './components/tosBlock';
import ComissionBlock from './components/comissionBlock';
import './App.css';

function App() {
  return (
    <>
      <Route path='/' component={MainRenderBlock} />
      <Route path='/TOS' component={TOSBlock} />
      <Route path='/Comissions' component={ComissionBlock} />
    </>
  );
}

export default App;
