import React, {Component} from 'react';

class RouletteGun extends Component {
  state = {
    chamber: null,
    spinningTheChamber: false
  }

  static defaultProps = {
    bulletInChamber : 8
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }


  handleTrigger = () =>  {
    console.log('triggering!')
    this.setState({spinningTheChamber: true})
    // setTimeout(()=>{console.log(this.state)}, 100)

    this.timeout = setTimeout(()=>{
      const bullet = Math.ceil(Math.random()*8);
      this.setState({chamber: bullet, spinningTheChamber:false});
      // clearTimeout(this.timeout);
    }, 1000)
  }

  render() {
    return (
    <div className="results">
      <p>{(this.state.spinningTheChamber)? 'spinning the chamber and pulling the trigger! ...'
        : (this.state.chamber === this.props.bulletInChamber)? 'BANG!!!!':"You're safe" }</p>
      <button onClick={this.handleTrigger}>Pull the Trigger!</button>
    </div>
    )
  }
}

export default RouletteGun;