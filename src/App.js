
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Buttons from './Buttons';
import Autorisation from './components/Autorisation';
import Registartion from './components/Registartion';

function App() {
  return (
    <div >
      <Buttons className='main' />
      <Switch>
        <Route path='/autorization' component={Autorisation} />
        <Route path='/registration' component={Registartion} />
      </Switch>


    </div>
  );
}

export default App;
