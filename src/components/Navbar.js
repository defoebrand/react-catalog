import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import runSearch from '../redux/actions';

import '../styles/Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    document.body.addEventListener('keypress', event => {
      const { input } = this.state;
      if (event.key === 'Enter') {
        dispatch(runSearch(input));
        this.setState({
          input: '',
        });
      }
    });
    fetch('https://vast-ridge-45587.herokuapp.com/').then(response => response.json()).then(data => {
      data.forEach(book => {
        // dispatch(createBook(book));
        console.log(book);
      });
    }).catch(err => (err));
  }

    handleChange = event => {
      // const { input } = this.state;
      this.setState({
        input: event.target.value,
      });
    }

    render() {
      const { input } = this.state;
      // const { results } = this.props;
      return (
        <header className="Navbar">
          <h1>Hello!</h1>
          <input value={input} onChange={this.handleChange} />
          {/* <p>{results}</p> */}
        </header>
      );
    }
}
Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Navbar);

// export default Navbar;
