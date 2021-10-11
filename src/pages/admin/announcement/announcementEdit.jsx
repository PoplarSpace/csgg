import React from 'react'
import {Card,Input,Button,Form} from 'antd'

import axios from 'axios';
//结构获得文本域
const { TextArea } = Input;
function AnnouncementEdit (props) { 
    //更改信息的方法
  const  handleSubmit =(values)  => {
     
       axios.post("http://8.142.10.159:8001/changshi/notification/createNotification",
       {content:values.content,title:values.tit,writer:values.writer
         }).then(
           res=>{
           props.history.push('/admin/announcement')
       }).catch(err=>{
           console.log(err);
       })
       
   }

       
   
  
 
       return (
         <Card title='公司公告编辑' bordered>
         <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
       
            <Form.Item label='发布人' name={'writer'}   rules={[
                               {
                                   required: true,
                                   message: '请输入发布人!'
                               },
                           ]}>
                 
             <Input placeholder="发布人" />
              </Form.Item>

              <Form.Item label='标题' name={'tit'}   rules={[
                               {
                                   required: true,
                                   message: '请输入标题!'
                               },
                           ]}>
                 
             <Input placeholder="标题信息"   />
              </Form.Item>
                    
              
              <Form.Item label='内容' name={'content'}   rules={[
                                {
                                    required: true,
                                    message: '请输入公告信息!'
                                },
                            ]}>
                  
                  <TextArea placeholder="请输入公告信息!" allowClear  style={{height:'200px'}}/>
 
                    </Form.Item>



                   <Form.Item>
                   <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button>
                   </Form.Item>
               </Form>
         </Card>
       )
   }

   export default AnnouncementEdit

