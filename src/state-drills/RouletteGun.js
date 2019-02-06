import React, {Component} from 'react';

class RouletteGun extends Component {
  state = {
    chamber: null,
    spinningTheChamber: false
  }

  static defaultProps = {
    bulletInChamber : 8
  }

  handleTrigger = () =>  {
    console.log('triggering!')
    this.setState({spinningTheChamber: true})
    console.log(this.state);
    this.timeout = setTimeout(this.checkChamber(), 2000)

  }

  checkChamber = () => {
    const bullet = Math.ceil(Math.random()*8);
    this.setState({...this.state, chamber: bullet});
    this.setState({...this.state, spinningTheChamber: false});
    clearTimeout(this.timeout);
  }

  render() {
    return (
    <div className="results">
      <p>{(this.spinningTheChamber)? 'spinning the chamber and pulling the trigger! ...'
        : (this.state.chamber === this.props.bulletInChamber)? 'BANG!!!!':"You're safe" }</p>
      <button onClick={this.handleTrigger}>Pull the Trigger!</button>
    </div>
    )
  }
}

export default RouletteGun;