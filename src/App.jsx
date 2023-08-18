import { Route } from 'wouter';
import MainRenderBlock from './components/mainRender';
import ComissionBlock from './components/comissionBlock';
import './App.css';

function App() {
  return (
    <>
      <Route path='/' component={MainRenderBlock} />
      <Route path='/commissions' component={ComissionBlock} />
    </>
  );
}

export default App;
