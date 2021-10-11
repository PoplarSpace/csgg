import React, { Component } from 'react'
import Leftnav from '../../component/Leftnav'
import MyContent from './Right_Content/index'
/**
 * 公司简介
 */
export default class Company_Profile extends Component {
    render() {
        return (
            <div className="Both_Shell">
                <div className="inner_shell" id="__symbol_height1__">
                    <Leftnav/>
                    <MyContent/>
                </div>
            </div>
        )
    }
}
