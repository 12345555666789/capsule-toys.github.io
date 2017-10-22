import React, { Component } from 'react';
import './index.less'
export default class Header extends Component {
    constructor(){
        super();
    }
  render() {
    return (
    <header className='homeHeader'>
        <div className='qiandao'>
            <img src="http://gacha.52toys.com/image/gif-sign.gif"/>
        </div>
        <div className='searchBtn' onClick={this.props.searchShow.bind(this,1)}>
            <i> </i>
        <span>品牌/作者/关键字</span>
        </div>
        <div className='r-nav' id='detail'>
            <img src="http://gacha.52toys.com/image/icon-home-sort.png" /></div>
        <div className='r-nav' id='zhuanti'>
            <img src="http://gacha.52toys.com/image/icon-home-zt.png" alt=""/>
        </div>
        <div className='r-nav' id='message'>
            <img src="http://gacha.52toys.com/image/icon-home-message.png" alt=""/>
        </div>
    </header>
    );
  }
}