import React, { Component, lazy } from "react";
import { Menu, Input, Carousel } from "antd";
import { Link, withRouter } from "react-router-dom";
import menuList from "./menuList";
import top_back3 from "./img/banner1.png";
import top_back4 from "./img/banner3.png";
import "antd/dist/antd.css";
import "./index.css";
import logo from "./img/logo.png";
import axios from "axios";
// const top_back3 = lazy(() => import("./img/banner1.png"));
// const top_back4 = lazy(() => import("./img/banner3.png"));
const { Search } = Input;
class Head extends React.Component {
  onSearch = (value) => {
    value = value.trim();
    if (value) {
      axios
        .get(`http://8.142.10.159:8001/changshi/news/findNewsByTitle/${value}`)
        .then((res) => {
          const result = res.data.data?.items;
          if (result) {
            this.props.history.push("/Trends/trend", result);
          }
        });
    }
  };

  getMenuNodes = (menuList) => {
    const path = this.props.location.pathname;

    return menuList.map((item) => {
      return (
        <Menu.Item key={item.key} className="home-menu-item">
          <Link
            to={item.key}
            onClick={() => this.props.history.push(item.key)}
          ></Link>
          <span>{item.title}</span>
        </Menu.Item>
      );
    });
  };

  UNSAFE_componentWillMount() {
    this.menuNodes = this.getMenuNodes(menuList);
  }
  render() {
    const path = this.props.location.pathname;
    return (
      // <div>
      //   <header className="home-header">
      //     <div className="home-logo"></div>
      //     <div className="home-name">
      //       <p>重庆长实钢结构有限公司</p>
      //     </div>
      //     <Search
      //       className="home-search"
      //       placeholder="input search text"
      //       onSearch={this.onSearch}
      //       enterButton
      //     />
      //   </header>

      //   <div className="logo" />

      // </div>
      <div>
        <header className="home-header">
          <div className="home-top">
            <img src={logo} alt="" className="home-logo" />
            <p className="home-name">重庆长实钢结构有限公司</p>

            <Search
              placeholder="请输入搜索内容"
              onSearch={this.onSearch}
              className="home-search"
            />
          </div>
          <Menu className="home-menu" SelectedKeys={[path]} theme="light">
            {this.menuNodes}
          </Menu>
          <Carousel autoplay={true} className="top_back4">
            <div>
              <img src={top_back4} alt="" className="imgs" />
            </div>
            <div>
              <img src={top_back3} alt="" className="imgs" />
            </div>
          </Carousel>
        </header>
      </div>
    );
  }
}

export default withRouter(Head);
