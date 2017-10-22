import React, { Component } from 'react';
import {getSlider}from "../../fetch/Home/Slider"
import ReactSwipe from 'react-swipe';
import './index.less'
export default class Slider extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            index:0
        }
    }
  render() {
    return (
        <div className='sliders'>
        <ReactSwipe className="carousel" swipeOptions={{continuous: true,
            speed: 400,
            auto: 3000,
            callback:(index)=>{
                this.setState({index:index})
            }
        }}
 key={this.state.data.length}
        >
            {this.state.data.map((item,index)=>(
                <div key={index} className='slider-item'>
                    <img src={item.src} alt="slider"/>
                </div>
            ))}
        </ReactSwipe>
            <ul className='dots'>
                <li className={this.state.index==0?"active":""}></li>
                <li className={this.state.index==1?"active":""}></li>
                <li className={this.state.index==2?"active":""}></li>
                <li className={this.state.index==3?"active":""}></li>
                <li className={this.state.index==4?"active":""}></li>
                <li className={this.state.index==5?"active":""}></li>
            </ul>
        </div>
    );
  }
  componentDidMount(){
      getSlider().then(res=>res.json()).then(data=>{
          this.setState({data})
      })
  }
}