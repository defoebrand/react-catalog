import { Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import AllCharacters from '../components/AllCharacters';
// import Selection from '../components/Selection';
import Card from '../components/Card';

import '../styles/App.scss';

const App = () => (
  <div className="App">
    <Route path="/" component={Navbar} />
    <Route path="/all" component={AllCharacters} />
    <Route path="/card" component={Card} />
  </div>
);

export default App;
