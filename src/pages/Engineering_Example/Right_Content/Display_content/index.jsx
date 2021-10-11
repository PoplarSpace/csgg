import axios from "axios";
import React, { Component } from "react";
import { withRouter } from "react-router";
import "./index.css";
class Display_content extends Component {
  state = {
    data: [],
  };

  send = (a) => {
    axios
      .get(`http://8.142.10.159:8001/changshi/project/findProjectById/${a.id}`)
      .then((res) => {
        this.setState({
          data: res.data.data.parentProjects,
        });

        this.props.history.push(
          "/Engineering_Example/message",
          this.state.data
        );
      });
  };
  render() {
    // console.log("props",this.props);
    const { display_items } = this.props;
    // console.log(display_items)

    return (
      <div className="outer_shell">
        {/* 内容展示区 */}
        {display_items.map((display) => {
          return (
            <div
              className="display_content"
              key={display.id}
              onClick={() => this.send(display)}
              data={this.state.data}
            >
              <img
                className="eng_img"
                id="eng_img"
                src={display.url}
                alt="err"
              />
              <p className="display_p">{display.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default withRouter(Display_content);
