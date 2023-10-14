import './App.css';
import React from 'react';
import {TwitterPicker} from 'react-color';

class App extends React.Component {
  state = {
    background: '#fff',
  };

  handleChangeComplete = (color) => {
    console.log(color.hex);
    this.setState ({backgound: color.hex});
  };
  
  render() {
    return (
      <TwitterPicker
        color={this.state.background}
        onChangeComplete={this.handle}
      />
    )
  }
}

export default App