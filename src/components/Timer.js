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
    chronometreIsRunning: false,
    CountdownIsRunning: false,
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
  startChronometre = (s, m, h) => {
    if (!this.state.chronometreIsRunning) {
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
    } else {
      return;
    }
    this.setState({
      chronometreIsRunning: true,
    });
  };
  startCountdown = (s, m, h, markMode) => {
    if (!this.state.CountdownIsRunning) {
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
    } else {
      return;
    }
    this.setState({
      CountdownIsRunning: true,
    });
  };
  startTimer(s, m, h, markMode) {
    return markMode
      ? this.startCountdown(s, m, h)
      : this.startChronometre(s, m, h, markMode);
  }
  stopTimer = () => {
    clearInterval(this.timer);
  };
  resetTimer = (markMode) => {
    this.stopTimer();
    if (markMode) {
      this.setState({
        timeCountDown: {
          seconds: 0,
          minutes: 5,
          hours: 0,
        },
        CountdownIsRunning : false,
      });
    } else {
      this.setState({
        time: {
          seconds: 0,
          minutes: 0,
          hours: 0,
        },
        chronometreIsRunning: false,
      });
    }
  };
  changeMode = () => {
    this.setState({
      markMode: !this.state.markMode,
    });
  };
  changeTitle = (markMode) => {
    return markMode ? "Chronometer" : "Countdown";
  };

  render() {
    const { markMode } = this.state;

    return (
      <div className="timer">
        <div className="time">
          <span>{this.getTime(this.getHours(markMode))}</span> :{" "}
          <span>{this.getTime(this.getMinutes(markMode))}</span> :{" "}
          <span>{this.getTime(this.getSeconds(markMode))}</span>
        </div>
        <div>
          <button
            className="btn-time"
            onClick={() =>
              this.startTimer(
                this.getSeconds(markMode),
                this.getMinutes(markMode),
                this.getHours(markMode),
                markMode
              )
            }
          >
            Start
          </button>
          <button className="btn-time" onClick={() => this.stopTimer()}>
            Stop
          </button>
          <button
            className="btn-time"
            onClick={() => this.resetTimer(markMode)}
          >
            reset
          </button>
        </div>
        <button className="btn-mode" onClick={() => this.changeMode()}>
          {this.changeTitle(markMode)}
        </button>
      </div>
    );
  }
}

export default Timer;
