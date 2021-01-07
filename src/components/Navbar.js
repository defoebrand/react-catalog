import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { runSearch, createEntries } from '../redux/actions';

import '../styles/Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange.bind(this);
    this.handleClick.bind(this);

    // fetch('https://akabab.github.io/superhero-api/api/all.json').then(response => response.json()).then(data => {
    //   console.log(data);
    //   // dispatch(createEntries(data));
    // }).catch(err => err);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    fetch('https://akabab.github.io/superhero-api/api/all.json').then(response => response.json()).then(data => {
      console.log(data);

      localStorage.entries = JSON.stringify(data);

      dispatch(createEntries(data));
      // console.log(supers);
    }).catch(err => err);
  //   document.body.addEventListener('keypress', event => {
  //     const { input } = this.state;
  //     if (event.key === 'Enter') {
  //       dispatch(runSearch(input));
  //       this.setState({
  //         input: '',
  //       });
  //     }
  //   });
  }

    handleChange = event => {
      const { dispatch } = this.props;

      this.setState({
        input: event.target.value,
      });
      dispatch(runSearch(event.target.value));
    }

    handleClick = () => {
      const { input } = this.state;
      const { dispatch } = this.props;
      dispatch(runSearch(input));
      this.setState({
        input: '',
      });
    }

    render() {
      const { input } = this.state;

      return (
        <header className="Navbar">
          <h1>Hello!</h1>
          <input value={input} onChange={this.handleChange} />
          <input type="submit" value="Submit" onClick={this.handleClick} />
        </header>
      );
    }
}
Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(null)(Navbar);
