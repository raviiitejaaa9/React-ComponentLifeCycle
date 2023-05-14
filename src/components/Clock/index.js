import {Component} from 'react'
import './index.css'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = {date: new Date()}
    console.log('constructor method called')
  }

  componentDidMount() {
    console.log('Component Did Mount Called')
    this.timerId = setInterval(this.tick, 1000)
  }

  componentWillUnmount() {
    console.log('Compoonent Will Unmount Called')
    clearInterval(this.timerId)
  }

  tick = () => {
    this.setState({date: new Date()})
  }

  render() {
    console.log('render Called')
    const {date} = this.state
    console.log(date)

    // const reqDateFormat =

    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time"> {date.toLocaleTimeString()} </p>
      </div>
    )
  }
}
export default Clock
