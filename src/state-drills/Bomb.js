import React, { Component } from 'react';

class Bomb extends Component {
  state = {
    count: 0
  }

  checkCount = () => {
    if(this.state.count >= 8){
      clearInterval(this.interval)
      return 'BOOM!!!!'
    } else if (this.state.count % 2 === 0){
      return 'tick'
    } else{return 'tock'}
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({...this.state, count : this.state.count + 1})
    }, 1000)
  }

  render () {
    let message = this.checkCount()
    console.log(message);
    return (
      <div>
        <p>message: {message}</p>
      </div>
    )
  }
}


export default Bomb