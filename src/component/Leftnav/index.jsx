import React, { Component } from 'react'
import './index.css'
export default class Leftnav extends Component {
    render() {
        return (
            <div id='warp1'>
             {/* 企业文化板块内容 */}
             <div className="introduction">
        <div>
          <div className="culture">企业文化</div>
          {/* 上板块 */}
          <div className="content-menu">
            <div> 价值观念：诚廉、创新、卓越、和谐</div>
            <div>价值观念：诚廉、创新、卓越、和谐</div>
            <div>企业精神：团结、务实、高效、奋进</div>
            <div>管理理念：严格、规范、高效、精细</div>
            <div>质量理念：合作、友谊、双赢、发展</div>
            <div>管理理念：一丝不苟、精益求精</div>
            <div>安全理念：安全第一、科学防范</div>
          </div>
          {/* 内容板块 */}
        </div>
      </div>
             
            </div>
        )
    }
}
