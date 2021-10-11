import React, { lazy, useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.css";
import axios from "axios";
let logo = lazy(() => import("./img/blue_bar.png"));
function Home(props) {
  const [news, setNews] = useState([]);

  const [contact, setContact] = useState([]);
  useEffect(() => {
    axios
      .get("http://8.142.10.159:8001/changshi/news/findAllNews")
      .then((res) => {
        setNews(res.data.data.items);
      })
      .catch((rea) => {
        console.log(rea);
      });
    axios
      .get("http://8.142.10.159:8001/changshi/contact/findContact")
      .then((res) => {
        console.log("1", res);
        setContact(res.data.data.items);
      });
  }, []);

  return (
    <div className="middlePart">
      {/* 总盒子 */}
      <div className="companyProfile">
        <div className="mid_part_top">
          <img alt="" src={logo}></img>
          <p className="mid_part_top_text1">公司简介</p>
          <p className="mid_part_top_text2">Company profile</p>
        </div>
        <div className="com_pro_text">
          <p>
            {" "}
            重庆长实钢结构有限公司位于重庆市万州区沱口集装箱码头办公大楼三楼，注册资金1000万元。是一家专业从事钢结构设计、制作、施工安装于一体的高新技术企业，在万州经开区建有占地40余亩的生产基地，有包括火焰切割机、组立机、埋弧焊机、抛丸机等组成的重钢生产线和轻型钢生产线。公司与鸿路钢构等大型钢构集团建立了良好的合作伙伴关系。公司拥有多套建构钢结构设计软件，胜任各种轻钢和重钢结构的设计、制作与安装任务，具有建筑总承包叁级资质和建筑装修修饰工程专业承包贰级资质。
          </p>
          <p>
            公司主要经营钢结构制作加工和钢结构安装；承接各类厂房、货物仓库、加油站、商贸中心、游泳馆以及钢结构的高层建筑，建筑总承包、建筑装修装饰工程等,近年来已承担各类工程100余个，共营业额5亿多元。
          </p>
          <p>
            本公司拥有一批专业生产钢结构的熟练技术工人30名，其中有高级职称4人，中级职称5人，项目经理4名。有稳定的钢结构安装、施工队伍8支，共50余人。
          </p>
          <p>
            我公司秉承“品质第一、客户至上、锐意进取”的理念，竭诚为广大客户提供最优质的服务。
          </p>
        </div>
        <button
          title="更多"
          style={{ cursor: "pointer" }}
          onClick={() => {
            props.history.push("/Company_Profile");
          }}
        >
          More
        </button>
      </div>

      {/* 公司简绍 */}
      {/* 右盒子 */}
      <div className="ln_mb_cu">
        <div className="latestNews">
          <div className="mid_part_top">
            <img alt="" src={logo}></img>
            <p className="mid_part_top_text1">最新动态</p>
            <p className="mid_part_top_text2">Latest News</p>
            <button
              id="newBut"
              style={{ cursor: "pointer" }}
              title="更多"
              onClick={() => {
                props.history.push("/Trends/trend");
              }}
            >
              More
            </button>
          </div>
          <ul>
            {news.map((item, index) => {
              if (index < 5) {
                return (
                  <li onClick={() => props.history.push("/Trends")}>
                    {" "}
                    {item.title}{" "}
                  </li>
                );
              }
            })}
          </ul>
        </div>
        {/* 公司动态 */}

        <div className="mainBusiness">
          <div className="mid_part_top">
            <img alt="" src={logo}></img>
            <p className="mid_part_top_text1">主营业务</p>
            <p className="mid_part_top_text2">Main Business </p>
            <button
              id="busBtb"
              title="更多"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("/Business");
              }}
            >
              More
            </button>
          </div>
          <ul>
            <li>建筑总承包</li>
            <li>建筑装修装饰工程</li>
            <li>钢结构厂房设计建设</li>
            <li>各种钢结构型材设计加工</li>
            <li>活动板房设计制作安装</li>
          </ul>
        </div>
        {/* 主营业务 */}

        <div className="contactUs">
          <div className="mid_part_top">
            <img alt="" src={logo}></img>
            <p className="mid_part_top_text1">联系我们</p>
            <p className="mid_part_top_text2">Contact Us</p>
            <button
              id="contactBtn"
              title="更多"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.history.push("/Contact");
              }}
            >
              More
            </button>
          </div>
          <ul>
            {contact.map((item) => {
              return <li> {item.content} </li>;
            })}
          </ul>
        </div>
        {/* 主营业务 */}
      </div>
    </div>
  );
}

export default withRouter(Home);
