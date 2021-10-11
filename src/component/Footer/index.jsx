import React, { Component } from "react";
import "./index.css";
import axios from "axios";
export default class Footer extends Component {
  state = {
    data: [],
  };

  getLink = () => {
    return this.state.data.map((item) => {
      return (
        <p>
          <a href={item.address} style={{ color: "white" }}>
            {item.name}
          </a>
        </p>
      );
    });
  };
  componentDidMount() {
    axios
      .get("http://8.142.10.159:8001/changshi/link/findAllLink")
      .then((res) => {
        console.log("res", res);
        this.setState({ data: res.data.data.items });
      });
  }
  render() {
    return (
      <div className="home-total">
        <div id="FriendlyLinks">
          <div id="fl_former">
            <p>友情链接：</p>
            <div id="Footer_links">{this.getLink()}</div>
          </div>

          <div id="fl_later">
            <p>版权所有</p>
            <div id="fengfeng">
              <p>©2012-2050 重庆长实钢结构有限公司</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
