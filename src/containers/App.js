import { Route } from 'react-router-dom';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Navbar from '../components/Navbar';
import AllCharacters from '../components/AllCharacters';
// import Selection from '../components/Selection';
import Card from '../components/Card';

import '../styles/App.scss';

const App = () => (
  <div className="App">
    {/* console.log('navbar entry', entry) */}
    <Route path="/" component={Navbar} />
    <Route path="/all" component={AllCharacters} />
    <Route path="/card/:super" component={Card} />
  </div>
);

// App.propTypes = {
//   test: PropTypes.string,
// };
//
// App.defaultProps = {
//   test: '',
// };

// export default connect(state => ({
// entry: state.selectionReducer.entry,
// }))(App);

export default App;
