import React, { Component } from 'react';
import './style.css';
import './style2.css';
import img from './webpack.svg';
import '@/assets/fonts/iconfont.css';
console.log('img: ', img);

class Test extends Component {
  state = {}
  render() {
    return (
      <div className='red'>
        fdsafsaf
        <div className="blue">fdaf</div>
        <img src={img} />
        <div className="iconfont iconbofang3"></div>
      </div>
    );
  }
}

export default Test;
