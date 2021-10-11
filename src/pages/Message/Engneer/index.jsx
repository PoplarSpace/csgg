import React from "react";
import "./index.css";
class Engineer extends React.Component {
  render() {
    console.log(0, this.props);
    const { title, writer, content, gmtCreate } = this.props.location.state;
    return (
      <div className="me_passage">
        <h3 className="me_title">{title}</h3>
        <p className="me_writer">
          发布人 {writer} | 发布时间 {gmtCreate}
        </p>
        <p className="me_content">{content}</p>
      </div>
    );
  }
}

export default Engineer;
