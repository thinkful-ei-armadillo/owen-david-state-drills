import React, { Component } from 'react';

class HelloWorld extends Component {
  state = {
    who: 'world'
  };

  handleWorldButtonClick = () => {
    this.setState({...this.state, who: 'world'})
  };

  handleFriendButtonClick = () => {
    this.setState({...this.state, who: 'friend'})
  }

  handleReactButtonClick = () => {
    this.setState({...this.state, who: 'react'})
  }

  render() {
    return (
      <div className="HelloWorld">
        <p>Hello {this.state.who}</p>
        <button onClick = {this.handleWorldButtonClick} >World</button>
        <button onClick = {this.handleFriendButtonClick}>Friend</button>
        <button onClick = {this.handleReactButtonClick}>React</button>
      </div>
    );
  }
}



export default HelloWorld;