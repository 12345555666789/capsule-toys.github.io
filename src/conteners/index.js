import '../assets/index.less';
import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch}from 'react-router-dom';

import RouterMap from "../routes/index";
import Footer from "../components/Footer/index";

export default class App extends Component {
  constructor(){
    super();
      this.state={
        done:false
      }
  }
  render() {
    return (
        <div>
            {this.state.done?
            <RouterMap/>:<div>正在加载</div>
            }
            <Footer/>
        </div>
    );
  }
  componentDidMount(){
    this.setState({
        done:true
    })
  }
}