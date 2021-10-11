import React, { Component } from 'react'
import Left_nav from '../../component/Leftnav'
import Right_Content from './Right_Content/index'
/**
 * 主营业务
 */
export default class Business extends Component {
    render() {
        return (
            <div className="Both_Shell">
                <div className="inner_shell">
                    <Left_nav/>
                    <Right_Content/>
                </div>
            </div>
        )
    }
}
