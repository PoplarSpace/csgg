import React, { Component } from 'react'
import Left_nav from '../../component/Leftnav'
import Contact_content from './Right_Content/index'
/**
 * 联系我们
 */
export default class Contact extends Component {
    render() {
        return (
            <div className="Both_Shell">
                <div className="inner_shell">
                    <Left_nav/>
                    <Contact_content/>
                </div>
            </div>
        )
    }
}
