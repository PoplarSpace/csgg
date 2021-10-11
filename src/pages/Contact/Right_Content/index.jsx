import React, { Component } from "react";
import "./index.css";
import axios from "axios";
export default class Right_Content extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    axios
      .get("http://8.142.10.159:8001/changshi/contact/findContact")
      .then((res) => {
        console.log(res.data.data.items);
        const result = res.data.data.items;
        this.setState({ data: result });
      });
  }

  render() {
    return (
      <div id="content_shell">
        <div className="contact_right_title">
          <h2 className="contact_title_h3">联系我们</h2>
          <hr />
        </div>
        <div className="contact_content" id="__Contactsymbolstyle__">
          {/* <p class="Contact_p" id="__first-Contact_p__">
            邓经理:18680900078
          </p>
          <p class="Contact_p">杨经理:15696633268</p>
          <p class="Contact_p">电 话:023-58369088</p>
          <p class="Contact_p">传 真:023-58369088</p>
          <p class="Contact_p">地 址:重庆万州区沱口集装箱码头办公大楼310</p> */}
          {this.state.data.map((item) => {
            return (
              <div key={item.id}>
                <p className="Contact_p">{item.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
