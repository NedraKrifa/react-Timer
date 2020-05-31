import React, { Component } from "react";

class Timer extends Component {
  state = {
    time: {
      seconds: 0,
      minutes: 0,
      hours: 0,
    },
    timeCountDown: {
      seconds: 0,
      minutes: 5,
      hours: 0,
    },
    markMode: false, //chronometre
  };
  getHours = (markMode) => {
    return markMode ? this.state.timeCountDown.hours : this.state.time.hours;
  };
  getMinutes = (markMode) => {
    return markMode
      ? this.state.timeCountDown.minutes
      : this.state.time.minutes;
  };
  getSeconds = (markMode) => {
    return markMode
      ? this.state.timeCountDown.seconds
      : this.state.time.seconds;
  };
  getTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };
  getStartChronometre = (s, m, h) => {
    this.timer = setInterval(() => {
      if (s === 59) {
        s = 0;
        if (m === 59) {
          m = 0;
          h = h + 1;
        } else {
          m = m + 1;
        }
      } else {
        s = s + 1;
      }
      this.setState({
        time: {
          seconds: s,
          minutes: m,
          hours: h,
        },
      });
    }, 1000);
  };
  getStartCountdown = (s, m, h) => {
    this.timer = setInterval(() => {
      if (s === 0) {
        s = 59;
        if (m === 0) {
          m = 59;
          h = h - 1;
        } else {
          m = m - 1;
        }
      } else {
        s = s - 1;
      }
      this.setState({
        timeCountDown: {
          seconds: s,
          minutes: m,
          hours: h,
        },
      });
    }, 1000);
  };
  getStart(s, m, h, markMode) {
    return markMode
      ? this.getStartCountdown(s, m, h)
      : this.getStartChronometre(s, m, h);
  }
  getStop = () => {
    clearInterval(this.timer);
  };
  getReset = (markMode) => {
    this.getStop();
    if (markMode) {
      this.setState({
        timeCountDown: {
          seconds: 0,
          minutes: 5,
          hours: 0,
        },
      });
    } else {
      this.setState({
        time: {
          seconds: 0,
          minutes: 0,
          hours: 0,
        },
      });
    }
  };
  getMode = () => {
    this.setState({
      markMode: !this.state.markMode,
    });
  };
  getModeTitle = (markMode) => {
    return markMode ? "Chronometer" : "Countdown";
  };

  render() {
    const { markMode } = this.state;

    return (
      <div className="timer">
        <div className='time'>
          <span>{this.getTime(this.getHours(markMode))}</span> :{" "}
          <span>{this.getTime(this.getMinutes(markMode))}</span> :{" "}
          <span>{this.getTime(this.getSeconds(markMode))}</span>
        </div>
        <div>
          <button
            className="btn-time"
            onClick={() =>
              this.getStart(
                this.getSeconds(markMode),
                this.getMinutes(markMode),
                this.getHours(markMode),
                markMode
              )
            }
          >
            Start
          </button>
          <button className="btn-time" onClick={() => this.getStop()}>
            Stop
          </button>
          <button className="btn-time" onClick={() => this.getReset(markMode)}>
            reset
          </button>
        </div>
        <button className="btn-mode" onClick={() => this.getMode()}>
          {this.getModeTitle(markMode)}
        </button>
      </div>
    );
  }
}

export default Timer;
