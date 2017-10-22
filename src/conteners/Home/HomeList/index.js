import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './index.less'
export default class HomeList extends Component {
  render() {
    return (
    <div className='homeList'>
         <div className="hot">
             <div className="hot-L">
                 <Link to="/play">
                 <div className="hot-L-top">
                    <span className='hot-icon'><img src="http://gacha.52toys.com/image/icon-index-type-hot.png" alt=""/></span>
                     <img src="http://img3.52toys.com/56ed64cc20ad1d2b467ac0880cd24e2d/300/300" alt=""/>
                 </div></Link>
                 <div className="hot-L-bottom">
                     <span className='hot-icon'><img src="http://gacha.52toys.com/image/icon-index-type-sale.png" alt=""/></span>
                     <img src="http://img3.52toys.com/063a54515b5a187965ade219211822d0/300/190" alt=""/>
                 </div>
             </div>
             <div className="hot-R">
                 <div className="hot-R-top">
                     <span className='hot-icon'><img src="http://gacha.52toys.com/image/icon-index-type-time.png" alt=""/></span>
                     <img src="http://img3.52toys.com/dafe69426b6a18bfb951e13332578c8e/392/237" alt=""/>
                 </div>
                 <div className="hot-R-bottom">
                     <div className="hot-R-bottom-L">
                         <span className='hot-icon'><img src="http://gacha.52toys.com/image/icon-index-type-reserve.png" alt=""/></span>
                         <img src="http://img3.52toys.com/5af66b734ddd3bd08a42ec3f49647a86/187/236" alt=""/>
                     </div>
                     <div className="hot-R-bottom-R">
                         <span className='hot-icon'><img src="http://gacha.52toys.com/image/icon-index-type-new.png" alt=""/></span>
                         <img src="http://img3.52toys.com/3ed9ba154581959274f6929f5a31834f/187/236" alt=""/>
                     </div>
                 </div>
             </div>
         </div>
        <div style={{height:100}}> </div>
    </div>
    );
  }
}