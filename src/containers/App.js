import { Route } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Display from '../components/Display';
import Card from '../components/Card';

import '../styles/App.scss';

const App = () => (
  <div className="App">
    <Route path="/" component={Navbar} />
    <Route path="/all" component={Display} />
    <Route path="/stats/:super" component={Card} />
  </div>
);

export default App;
