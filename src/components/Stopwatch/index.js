// Write your code here
import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timer: 0}

  onClickStartButton = () => {
    this.timerID = setInterval(this.tick, 1000)
  }

  onClickStopButton = () => {
    clearInterval(this.timerID)
  }

  onClickResetButton = () => {
    clearInterval(this.timerID)
    this.setState({timer: 0})
  }

  tick = () => {
    const {timer} = this.state
    this.setState({timer: timer + 1})
  }

  render() {
    const {timer} = this.state

    let seconds = timer % 60
    let minutes = (timer - seconds) / 60
    if (seconds < 10) {
      seconds = `0${seconds}`
    } else {
      seconds = `${seconds}`
    }

    if (minutes < 10) {
      minutes = `0${minutes}`
    } else {
      minutes = `${minutes}`
    }

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Stopwatch</h1>
          <div className="card">
            <div className="image-line">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
              />
              <p className="timer">Timer</p>
            </div>
            <h1 className="time">
              {minutes}:{seconds}
            </h1>
            <div>
              <button
                type="button"
                className="start"
                onClick={this.onClickStartButton}
              >
                Start
              </button>
              <button
                type="button"
                className="stop"
                onClick={this.onClickStopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset"
                onClick={this.onClickResetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
