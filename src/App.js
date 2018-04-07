import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Style from 'style-it';
import {CopyToClipboard} from 'react-copy-to-clipboard';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    mes: 'Cu Bác Hồ dài 20cm, Bác Hồ có một trục trặc lớn, Bác phải hôn Chu Ân Lai',
    convertedMes:'',
    copied: false
    };
    this.tieqviet = this.tieqviet.bind(this);
    this.handlechange = this.handlechange.bind(this);
    this.convert = this.convert.bind(this);
  }

  tieqviet(input) {
    const maps = [
      ['K(h|H)', 'X'],
  ['c(?!(h|H))|q', 'k'],
  ['C(?!(h|H))|Q', 'K'],
  ['t(r|R)|c(h|H)', 'c'],
  ['T(r|R)|C(h|H)', 'C'],
  ['d|g(i|I)|r', 'z'],
  ['D|G(i|I)|R', 'Z'],
  ['g(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'z$1'],
  ['G(i|ì|í|ỉ|ĩ|ị|I|Ì|Í|Ỉ|Ĩ|Ị)', 'Z$1'],
  ['đ', 'd'],
  ['Đ', 'D'],
  ['p(h|H)', 'f'],
  ['P(h|H)', 'F'],
  ['n(g|G)(h|H)?', 'q'],
  ['N(g|G)(h|H)?', 'Q'],
  ['(g|G)(h|H)', '$1'],
  ['t(h|H)', 'w'],
  ['T(h|H)', 'W'],
  ['(n|N)(h|H)', '$1\'']

    ];
    if (typeof input !== 'string') {
      throw new TypeError(`Expected a string, got ${typeof input}`);
    }
    return maps.reduce((seed, map) => {
      input = input.replace(new RegExp(map[0], 'gi'), map[1]);
      return input;
    }, input)

  }
  convert(){
    this.setState({
      convertedMes: this.tieqviet(this.state.mes)
    });
  }
  handlechange(e) {

    this.setState({
      mes: e.target.value
    });
  }
  render() {
    return Style.it(`
      *,
      *::before,
      *::after {
        box-sizing: border-box;
      }
    body,html {
        font-size: 14px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        line-height: 1.6;
      }
    body {
        padding: 15px;
      }
    a {
        color: #b74444;
        text-decoration: none;
      }
    .btn {
    background-color: #4CAF50;
    /* Green */
    border: none;
    color: white;
    padding: 10px 28px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    -webkit-transition-duration: 0.4s;
    /* Safari */
    transition-duration: 0.4s;
    cursor: pointer;
    border-radius: 8px;
  }
  .copy {
        background-color: white;
        color: black;
        border: 2px solid #4CAF50;
      }

      .copy:hover {
        background-color: #4CAF50;
        color: white;
      }
      .App {
        width: 100%;
        max-width: 640px;
        margin: 0 auto;
      }
      textarea {
        width: 100%;
        height: 150px;
        border: 1px solid #ccc;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        font-size: 1rem;
        padding: 8px;

      }
      .copyright {
  font-size: .9rem;
  margin-top: 50px;
  color: #666;
}
      .result {
        width: 100%;
        margin: 0 auto;
        margin-top: 18px;
        background: #f1f1f1;
        border-radius: 5px;
        padding: 8px;
        font-family: 'Open Sans', Helvetica, Arial, sans-serif;
        white-space: pre-wrap;
      }
      .copyright {
        font-size: 0.9rem;
        margin-top: 50px;
        color: #666;
      }
      .target {
        width: 1px;
        height: 1px;
        position: fixed;
        bottom: 0;
        opacity: 0;
      }`,
      <div className = "App" >
      <header className = "App-header" >
      <img src = {logo} className = "App-logo" alt = "logo" />
      <h1 className = "App-title"> Bộ cuyển dổi Tiếq Việt Tào Lao</h1>
      </header>
       <p className = "App-intro">
<textarea placeholder = "Gõ từ cần chuyển vào đây nào các bạn!" onChange ={this.handlechange }>{this.state.mes}</textarea>
<pre className="result" > {this.tieqviet(this.state.mes)}</pre>
<br></br>
<CopyToClipboard text={this.tieqviet(this.state.mes)} onCopy={() => this.setState({copied: true})}>
      <button className="btn copy" >Copy</button>
</CopyToClipboard>
     {this.state.copied ? <span style={{color: 'red'}}> Copied.</span> : null}
     <p className="copyright">
      Created by <a href="">Steven Ly</a>.
      Using <a href="https://reactjs.org">React.js</a>
    </p>
      </p>
      </div>
    )
  }
}

export default App;
