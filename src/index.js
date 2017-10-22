import React from 'react';
import {render} from 'react-dom'
import App from "./conteners/index";
import "./assets/index.less";
import Footer from "./components/Footer/index";
// import {Provider}from "react-redux";
// import {configStore} from "./store/index";
// let store=configStore({})
render(

            <App/>
        ,
            document.getElementById("root")
);