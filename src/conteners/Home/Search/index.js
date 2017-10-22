import React, { Component } from 'react';
import {getSearch} from '../../../fetch/Home/Search'
import "./index.less"
export default class Search extends Component {
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    searchHidden(){
        this.refs.search.className="search"
    }
    componentDidMount(){
        getSearch().then(res=>res.json()).then(data=>{
            this.setState({data})
        })
    }
  render() {
    return (
    <div className="search" ref="search">
        <header className="search-header">
            <span className="back" onClick={this.searchHidden.bind(this)}> </span>
            <input type="text" placeholder="输入关键字搜索扭蛋"/>
            <span className="search-btn">
                搜索
            </span>
            <div className="header-bar"> </div>
        </header>

        <div className="search-list">
            <div className="search-list-hot">
                <p className="hotIcon"> </p>
                <ul>
                    {this.state.data.map((item,index)=>{
                        return (<li key={index}><span>{item.title} </span></li>)
                    })}
                </ul>
            </div>
            <div className="search-list-history">
                历史搜索
            </div>
        </div>
    </div>
      )
    }
  }