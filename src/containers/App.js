import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import Card from '../components/Card';

import '../styles/App.scss';

const App = () => (
  <div className="App">
    <Navbar />
    <Route exact path="/" component={Results} />
    <Route path="/card" component={Card} />
  </div>
);

export default App;
