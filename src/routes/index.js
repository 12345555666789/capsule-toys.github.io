import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch}from 'react-router-dom';
import Home from "../conteners/Home/index";
import Toys from "../conteners/Toys/index";
import ToyBox from "../conteners/ToyBox/index";
import Login from "../conteners/Login/index";
import Info from "../conteners/Info/index";
import Footer from "../components/Footer/index";
import Play from "../conteners/Play/index";
export default class RouterMap extends Component {
  render() {
    return (
    <div>
        <Router>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/toys' component={Toys}/>
                <Route path='/toybox' component={ToyBox}/>
                <Route path='/login/:route?' component={Login}/>
                <Route path='/info' component={Info}/>
                <Route path='/play' component={Play}/>
            </Switch>
        </Router>
    </div>
    );
  }
}