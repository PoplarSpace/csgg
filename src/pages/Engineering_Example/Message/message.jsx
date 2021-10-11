import React from "react";
import "./message.css";
class Message extends React.Component {
  state = {
    url: this.props.location.state.url,
    comment: this.props.location.state.comment,
  };
  render() {
    return (
      <div id="m_shell">
        <div className="right_title">
          <h2 className="title_h3">工程实例</h2>
          <hr />
        </div>
        <div className="right_cont">
          <h2 className="m_title"> {this.props.location.state.title}</h2>
          <div className="photo">
            {this.state.url.map((item) => {
              return <img src={item} className="photo_img"></img>;
            })}
          </div>
          <div className="comment"> {this.state.comment}</div>
        </div>
      </div>
    );
  }
}

export default Message;
