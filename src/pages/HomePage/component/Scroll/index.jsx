import React, { lazy, Suspense, useEffect } from "react";
import "./index.css";
import p1 from "./pictures/p1bishangdalu.png";
import p2 from "./pictures/pic2wanzhounongjiale.png";
import p3 from "./pictures/p3wanzhoushidai.png";
import p4 from "./pictures/p4biesu.jpg";
import p5 from "./pictures/p5huanbao.jpg";
import p6 from "./pictures/p6chejian.jpg";
import p7 from "./pictures/p7bangonglou.jpg";
import p8 from "./pictures/p8fuhuajidi.jpg";
import p9 from "./pictures/p9dakuadu.jpg";
import p10 from "./pictures/p10dalou.jpg";
import axios from "axios";
import LazyLoad from "react-lazyload";
// let p1 = lazy(() => import("./pictures/p1bishangdalu.png"));
// let p2 = lazy(() => import("./pictures/pic2wanzhounongjiale.png"));
// let p3 = lazy(() => import("./pictures/p3wanzhoushidai.png"));
// let p4 = lazy(() => import("./pictures/p4biesu.jpg"));
// let p5 = lazy(() => import("./pictures/p5huanbao.jpg"));
// let p6 = lazy(() => import("./pictures/p6chejian.jpg"));
// let p7 = lazy(() => import("./pictures/p7bangonglou.jpg"));
// let p8 = lazy(() => import("./pictures/p8fuhuajidi.jpg"));
export default function Pic() {
  useEffect(() => {
    axios
      .get("http://8.142.10.159:8001/changshi/numvisitors/addOne")
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <div class="window">
      <div class="images_list">
        <LazyLoad height={100}>
          <img src={p1} alt="" className="images_list_img" />
          <img src={p2} alt="" className="images_list_img" />
          <img src={p3} alt="" className="images_list_img" />
          <img src={p4} alt="" className="images_list_img" />
          <img src={p5} alt="" className="images_list_img" />
          <img src={p6} alt="" className="images_list_img" />
          <img src={p7} alt="" className="images_list_img" />
          <img src={p8} alt="" className="images_list_img" />
          <img src={p9} alt="" className="images_list_img" />
          <img src={p10} alt="" className="images_list_img" />
          <img src={p1} alt="" className="images_list_img" />
          <img src={p2} alt="" className="images_list_img" />
          <img src={p3} alt="" className="images_list_img" />
          <img src={p4} alt="" className="images_list_img" />
          <img src={p5} alt="" className="images_list_img" />
          <img src={p6} alt="" className="images_list_img" />
          <img src={p7} alt="" className="images_list_img" />
          <img src={p8} alt="" className="images_list_img" />
          <img src={p9} alt="" className="images_list_img" />
          <img src={p10} alt="" className="images_list_img" />
        </LazyLoad>
      </div>
    </div>
  );
}
