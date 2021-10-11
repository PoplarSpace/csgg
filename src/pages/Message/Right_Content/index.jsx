import React, { Component } from "react";
import Display_content from "./Display_content";
import axios from "axios";
import "./index.css";
import { Pagination } from "antd";
export default class Right_Content extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    contents: [],
    length:[]
  };

  // 初次网络请求

  componentDidMount() {
    axios.get("http://8.142.10.159:8001/changshi/notification/findAllNotification").then(res=>{
      
      this.setState({ length: res.data.data.items.length });
   })
    axios
      .get(`http://8.142.10.159:8001/changshi/notification/pageNotification/1/8`)
      .then(
        (res) => {
          this.setState({ contents: res.data.data.row });
         
        },
        (err) => {
          console.log(err);
        }
      );
  }

  // 网络请求图片和内容
  pageChange = (event) => {
    axios
      .get(`http://8.142.10.159:8001/changshi/notification/pageNotification/${event}/8`)
      .then(
        (res) => {
      
          this.setState({ contents: res.data.data.row });
        
        },
        (err) => {
          console.log(err);
        }
      );
   
  };
  render() {
    return (
      <div id="content_shell">
        <div className="mes_title">
          <h2 className="mes_h3">公司公告</h2>
          <hr />
        </div>
        <div className="right_content">
          {/* 接到数据后传入状态，props传给展示区 */}
          <Display_content display_items={this.state.contents} />
          <Pagination
            defaultCurrent={1}
            defaultPageSize={8}
            pageSizeOptions={8}
            onChange={this.pageChange}
            total={this.state.length}
            className='mes_pag'
          />
        </div>
      </div>
    );
  }
}
