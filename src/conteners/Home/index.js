import React, { Component } from 'react';
import Slider from "../../components/Silder/index";
import Header from "../../components/Header/index";
import NoData from "../../components/NoData/index";
import Footer from "../../components/Footer/index";
import HomeList from "./HomeList/index";
import Search from "./Search/index";
export default class Home  extends Component {
    searchShow(refs){
        this.refs.search.refs.search.className=refs?"search block":"search"
    };
  render() {
    return (
    <div className='home'>
      <Header searchShow={this.searchShow.bind(this)}/>
    <Slider/>
      {/*<NoData/>*/}
      <HomeList/>
      <Search ref="search" searchShow={this.searchShow.bind(this)}/>
    </div>
    );
  }
}