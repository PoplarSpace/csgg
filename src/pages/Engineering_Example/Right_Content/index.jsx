import React, { Component } from "react";
import Display_content from "./Display_content";
import axios from "axios";
import "./index.css";
import { Pagination } from "antd";
import { withRouter } from "react-router";

class Right_Content extends Component {
  state = {
    contents: [],
    length:[]
  };
  // 初次网络请求
  componentDidMount() {
    axios.get(`http://8.142.10.159:8001/changshi/project/pageQuery/1/6`).then(
      (res) => {
        this.setState({ contents: res.data.data.row });
      },
      (err) => {
        console.log(err);
      }
    );
    axios.get("http://8.142.10.159:8001/changshi/project/findParentProjects").then(res=>{
      
       this.setState({ length: res.data.data.parentProjects.length });
    })
  }

  // 网络请求图片和内容
  pageChange = (event) => {
    axios
      .get(`http://8.142.10.159:8001/changshi/project/pageQuery/${event}/6`)
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
        <div className="eng_right_title">
          <h2 className="title_h3">工程实例</h2>
          <hr />
        </div>
        <div className="right_content">
          {/* 接到数据后传入状态，props传给展示区 */}
          <Display_content display_items={this.state.contents} />
          <Pagination
            className="eng_pag"
            defaultCurrent={1}
            total={this.state.length}
            defaultPageSize={6}
            onChange={this.pageChange}
          />
        </div>
      </div>
    );
  }
}
export default withRouter(Right_Content);
