(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),s=n(6),a=n.n(s),i=n(1),u=n(2),c=n(4),m=n(3),l=(n(12),function(t){Object(c.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var o=arguments.length,r=new Array(o),s=0;s<o;s++)r[s]=arguments[s];return(t=e.call.apply(e,[this].concat(r))).state={time:{seconds:0,minutes:0,hours:0},timeCountDown:{seconds:0,minutes:5,hours:0},markMode:!1,chronometreIsRunning:!1,CountdownIsRunning:!1},t.getHours=function(e){return e?t.state.timeCountDown.hours:t.state.time.hours},t.getMinutes=function(e){return e?t.state.timeCountDown.minutes:t.state.time.minutes},t.getSeconds=function(e){return e?t.state.timeCountDown.seconds:t.state.time.seconds},t.getTime=function(t){return t<10?"0".concat(t):t},t.startChronometre=function(e,n,o){t.state.chronometreIsRunning||(t.timer=setInterval((function(){59===e?(e=0,59===n?(n=0,o+=1):n+=1):e+=1,t.setState({time:{seconds:e,minutes:n,hours:o}})}),1e3),t.setState({chronometreIsRunning:!0}))},t.startCountdown=function(e,n,o,r){t.state.CountdownIsRunning||(t.timer=setInterval((function(){0===e?(e=59,0===n?(n=59,o-=1):n-=1):e-=1,t.setState({timeCountDown:{seconds:e,minutes:n,hours:o}})}),1e3),t.setState({CountdownIsRunning:!0}))},t.stopTimer=function(){clearInterval(t.timer)},t.resetTimer=function(e){t.stopTimer(),e?t.setState({timeCountDown:{seconds:0,minutes:5,hours:0},CountdownIsRunning:!1}):t.setState({time:{seconds:0,minutes:0,hours:0},chronometreIsRunning:!1})},t.changeMode=function(){t.setState({markMode:!t.state.markMode})},t.changeTitle=function(t){return t?"Chronometer":"Countdown"},t}return Object(u.a)(n,[{key:"startTimer",value:function(t,e,n,o){return o?this.startCountdown(t,e,n):this.startChronometre(t,e,n,o)}},{key:"render",value:function(){var t=this,e=this.state.markMode;return r.a.createElement("div",{className:"timer"},r.a.createElement("div",{className:"time"},r.a.createElement("span",null,this.getTime(this.getHours(e)))," :"," ",r.a.createElement("span",null,this.getTime(this.getMinutes(e)))," :"," ",r.a.createElement("span",null,this.getTime(this.getSeconds(e)))),r.a.createElement("div",null,r.a.createElement("button",{className:"btn-time",onClick:function(){return t.startTimer(t.getSeconds(e),t.getMinutes(e),t.getHours(e),e)}},"Start"),r.a.createElement("button",{className:"btn-time",onClick:function(){return t.stopTimer()}},"Stop"),r.a.createElement("button",{className:"btn-time",onClick:function(){return t.resetTimer(e)}},"reset")),r.a.createElement("button",{className:"btn-mode",onClick:function(){return t.changeMode()}},this.changeTitle(e)))}}]),n}(o.Component)),h=function(t){Object(c.a)(n,t);var e=Object(m.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"TIMER"),r.a.createElement(l,null))}}]),n}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))},7:function(t,e,n){t.exports=n(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.93ea0789.chunk.js.map