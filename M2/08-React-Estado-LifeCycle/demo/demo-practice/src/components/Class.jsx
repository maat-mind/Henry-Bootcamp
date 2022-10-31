import React from 'react'

class Class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    }
    this.variable = 0
  }

  clickState = () => {
    this.setState({ counter: this.state.counter + 1 }, () =>
      console.log(this.state.counter)
    )
  }

  clickVariable = () => {
    this.variable++
    console.log(this.variable)
  }

  render() {
    return (
      <>
        <h1>Class Component</h1>
        <p>{this.props.saludo}</p>

        <button onClick={this.clickState}>Aumentar State</button>
        <p>{this.state.counter}</p>

        <button onClick={this.clickVariable}>Aumentar Variable</button>
        <p>{this.variable}</p>
      </>
    )
  }
}

export default Class
