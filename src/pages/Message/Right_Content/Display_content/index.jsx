import React, { Component } from "react";
import { withRouter } from "react-router";
import "./index.css";
class Display_content extends Component {
  render() {
    const { display_items } = this.props;
    return (
      <div className="outer_shell">
        {/* 内容展示区 */}
        {display_items.map((display) => {
          return (
            <div
              key={display.id}
              className="trend_outer_shell"
              onClick={() =>
                this.props.history.push("/message/engineer", display)
              }
            >
              <span className="trend_display_content">{display.title}</span>
              <span className="trend_display_content">{display.gmtCreate}</span>
            </div>
          );
        })}
      </div>
    );
  }
}
export default withRouter(Display_content);
