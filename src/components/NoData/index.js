import React, { Component } from 'react';
export default class NoData extends Component {
  render() {
    return (
    <div className="noData" style={{height:1000+'px',textAlign:'center'}}> <h1>未获取到数据</h1> </div>
    );
  }
}