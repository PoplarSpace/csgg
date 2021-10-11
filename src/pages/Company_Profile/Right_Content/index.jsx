import React, { Component } from "react";
import "./index.css";
export default class Right_Content extends Component {
  render() {
    return (
      <div id="profile_shell">
        <div className="right_title">
          <h2 className="title_h3">公司简介</h2>
          <hr />
        </div>
        {/* title */}
        <div className="profile_content">
          <div className="detail-message">
            <p>
              {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              重庆长实钢结构有限公司位于重庆市万州区沱口集装箱码头办公大楼三楼，注册资金1000万元。是一家专业从事钢结构设计、制作、施工安装于一体的高新技术企业，在万州经开区建有占地40余亩的生产基地，有包括火焰切割机、组立机、埋弧焊机、抛丸机等组成的重钢生产线和轻型钢生产线。公司拥有多套建构钢结构设计软件，胜任各种轻钢和重钢结构的设计、制作与安装任务。
            </p>
            <p>
              {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              公司主要经营钢结构制作加工和钢结构安装；承接各类厂房、货物仓库、加油站、钢结构别墅、商贸中心、游泳馆以及钢结构的高层建筑等。
            </p>
            <p>
              {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              本公司拥有一批专业生产钢结构的熟练技术工人30名，其中有高级职称4人，中级职称5人，项目经理4名。有稳定的钢结构安装、施工队伍8支，共50余人。
            </p>
            <p>
              {"\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"}
              我公司秉承“品质第一、客户至上、锐意进取”的理念，竭诚为广大客户提供最优质的服务。
            </p>
          </div>
        </div>
        {/* content */}
      </div>
    );
  }
}
