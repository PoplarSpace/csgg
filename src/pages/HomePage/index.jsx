import React, { Component } from 'react'

import Pic from './component/Scroll'
import Home from './component/content4'
import Footer from './component/footer'
import './HomePage.css'
/**
 * 网站首页
 */
export default class HomePage extends Component {
    render() {
        return (
            <div className='total'>
               
                <Home />
                <Pic  className='pic'/>
                <Footer />
              
            </div>
        )
    }
}