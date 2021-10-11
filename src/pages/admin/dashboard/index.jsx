import React, { useState,useEffect} from 'react'
import { Row, Col, Card, Statistic , Tabs} from "antd";
import 'axios'
import axios from 'axios';
import {TabletTwoTone,StarTwoTone} from '@ant-design/icons';


export default function Index() {
   const [dayData,setDayData]=useState([]);
   const [weekData,setWeekData]=useState([])
   useEffect(()=>{
       axios.get(`http://8.142.10.159:8001/changshi/numvisitors/getCurrent`).then((res)=>{

        setDayData(res.data.data.num)
      
       }).catch(rea=>{
         console.log(rea);
         
       })
       axios.get("http://8.142.10.159:8001/changshi/numvisitors/getWeekVis").then(res=>{
        setWeekData(res.data.data.week_num)
       }).catch(rea=>{
         console.log(rea);
       })
   },[])
  return (
    <div>
         <div>
      <Card title="数据汇总" bordered={false}>
        <Row gutter={8}>
          <Col span={8}>
            <Card title="今日访问量" color="red">
              <Statistic
                title="今日访问量"
                value={dayData}
                prefix={<TabletTwoTone />}
              ></Statistic>
            </Card>
          </Col>
          <Col span={16}>
            <Card title="该周访问量">
              <Statistic
                title="该周访问量"
                value={weekData}
                 prefix={<StarTwoTone />}
              ></Statistic>
            </Card>
          </Col>
        
        </Row>
      </Card>
     
    </div>
    </div>
  )
}
