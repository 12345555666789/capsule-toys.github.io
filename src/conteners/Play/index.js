import React, { Component } from 'react';
import './index.less'
import {Link}from "react-router-dom"
export default class Play extends Component {
eggGoOn(e){
    console.log(e);
    let eggOpen=this.refs.eggOpenBg;
    eggOpen.className=e===0?"eggOpen":e===1?"eggOpen active":null;
    if(e===1){
        this.refs.buttons.children[0].className="thrice";
        this.refs.buttons.children[1].className="once";
        this.refs.buttons.children[2].className="ten-times";
        this.refs.buttons.children[3].className="try-out";
        this.refs.egg.className="egg";
        this.refs.light.children[0].className="cat-ear";
        this.refs.light.children[1].className="pedestal";
    }
}
handleClick(e){
    switch (e){
        case 0:
            this.refs.buttons.children[0].className="thrice active";
            break;
        case 1:
            this.refs.buttons.children[1].className="once active";
            break;
        case 2:
            this.refs.buttons.children[2].className="ten-times active";
            break;
        case 3:
            this.refs.buttons.children[3].className="try-out active";
            break;
        default:
            null
    }
    this.lightFlash();
    this.refs.playAudio.play()
}
lightFlash(){
    clearTimeout();

    setTimeout(()=>{
        this.refs.light.children[0].className="cat-ear active";
        this.refs.light.children[1].className="pedestal active";
        this.refs.egg.className="egg active";

        setTimeout(()=>{
            this.eggGoOn(1)
        },1800)
    },600);

}
  render() {
    return (
    <div className="play">
        <audio ref="playAudio" src="http://gacha.52toys.com/sounds/v2-gacha-sound.mp3"> </audio>
        <div className="eggOpen" ref="eggOpenBg">
            <i className="egg-open-bg" >

            </i>
            <div className="goodLuck">

            </div>
            <div className="eggInfo">
                <img src="http://img3.52toys.com/7e5138125dfda5c40e882859e4c2fb65/360/510" alt=""/>
                <div className="eggTitle">
                <p>
                    阿狸迷你公仔 调色板系列 小恐龙 蛋盒-5号
                </p>
                </div>
            </div>
            <div className="eggShare">
                <div className="egg-back-btn" onClick={this.eggGoOn.bind(this,0)}>

                </div>
                <div className="egg-share-btn">

                </div>
            </div>
        </div>
        <div className="play-header">
            <span className='back' onClick={this.props.history.goBack}> </span>
            <Link to="/">
            <span className='goHome'> </span>
            </Link>
            <div className='balance'>
            <span> ￥</span>
            <span>0</span>
            </div>
            <div className='recharge'> </div>
            <div className="play-header-bar">

            </div>
        </div>
        <div className="toy-info">
            <div className='small'>
                <div className="collect">

                </div>
                <div className="share">

                </div>
            </div>

            <div className='toy-info-title'>
                <p className="toy-title">

                </p>
                <p className="toy-content">

                </p>
                <p className="warning">
                    此为蛋盒，可能需要拆开售卖，介意勿扭
                </p>
            </div>
            <div>

            </div>
        </div>
        <div className="cover"><img src="http://img3.52toys.com/f427c77e5a01635b2d3aecbd3813920e/300/330" alt=""/></div>
        <div className='bg'>
            <img ref="egg" className="egg" src="http://gacha.52toys.com/image/gacha/v4-gacha-stuff.png" alt=""/>
        </div>

        <div className="cat">
            <div className="light" ref="light">
                <div className="cat-ear">
                    <img src="http://gacha.52toys.com/image/gacha/v4-ears-active.png" alt=""/>
                </div>
                <div className="pedestal">
                    <img src="http://gacha.52toys.com/image/gacha/v4-gacha-light.png" alt=""/>
                </div>
            </div>
            <div className="buttons" ref='buttons'>
                <div className="thrice" onClick={()=>this.handleClick(0)}>
                    <img src="http://gacha.52toys.com/image/gacha/v4-button-play.png" alt=""/>
                </div>
                <div className="once" onClick={()=>this.handleClick(1)} >
                    <img src="http://gacha.52toys.com/image/gacha/v4-button-play.png" alt=""/>
                </div>
                <div className="ten-times" onClick={()=>this.handleClick(2)} >
                    <img src="http://gacha.52toys.com/image/gacha/v4-button-play.png" alt=""/>
                </div>
                <div className="try-out" onClick={()=>this.handleClick(3)}>
                    <img src="http://gacha.52toys.com/image/gacha/v4-button-play.png" alt=""/>
                </div>
            </div>
        </div>
        <footer>
            <div className='repertory'>
                <span>库存82</span>
                <span>10元/个</span>
            </div>
            <div className="comment">
                <i></i>
                <i></i>
            </div>
        </footer>
        </div>
      )
    }
  }