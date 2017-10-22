import React, { Component } from 'react';
import {NavLink}from 'react-router-dom'
import './index.less'
import {
    HashRouter as Router, Route, Link, Switch
} from "react-router-dom";
import Home from "../../conteners/Home/index";
export default class Footer extends Component {
  render() {
    return (

        <Router>
    <div className='footer'>
        <NavLink className='nav-home' exact activeClassName="active" to='/'>
            <i> </i>
        </NavLink>
        <NavLink className='nav-toys' activeClassName="active" to='/toys'>
            <i > </i>
        </NavLink>
        <NavLink className='nav-toysBox' activeClassName="active" to='/toybox'>
            <i> </i>
        </NavLink>
        <NavLink className='nav-info' activeClassName="active" to='/info'>
            <i> </i>
        </NavLink>
    </div>
        </Router>
    );
  }
}