import '../styles/Navbar.scss';
import { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
    };
    this.handleChange.bind(this);
  }

  // componentDidMount() {
  //   document.body.addEventListener('keypress', event => {
  //     if (event.key === 'Enter') {
  //       alert(event.key.value);
  //     }
  //   });
  // }

    handleChange = event => {
      this.setState({
        input: event.target.value,
      });
    }

    render() {
      const { input } = this.state;
      return (
        <header className="Navbar">
          <h1>Hello!</h1>
          <input value={input} onChange={this.handleChange} />
        </header>
      );
    }
}

export default Navbar;
