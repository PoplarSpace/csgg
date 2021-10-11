import React from 'react'
import {Card,Input,Button,Form} from 'antd'

import axios from 'axios';


 function LinkEdit (props) { 
     //更改信息的方法
   const  handleSubmit =(values)  => {
      
        axios.post("http://8.142.10.159:8001/changshi/link/createLink",
        {name:values.name
          ,address:values.address}).then(
            res=>{
            props.history.push('/admin/link')
        }).catch(err=>{
            console.log(err);
        })
        
    }

        
    
   
  
        return (
          <Card title='友情链接编辑' bordered>
          <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
        
             <Form.Item label='名称' name={'name'}   rules={[
                                {
                                    required: true,
                                    message: '请输入单位名称!'
                                },
                            ]}>
                  
              <Input placeholder="请输单位名称" />
               </Form.Item>

                 <Form.Item label='地址' name={'address'}   rules={[
                                {
                                    required: true,
                                    message: '请输入链接地址!'
                                },
                            ]}>
                  <Input placeholder="请输链接地址!" />
                    </Form.Item>
                
                    <Form.Item>
                    <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button>
                    </Form.Item>
                </Form>
          </Card>
        )
    }

    export default LinkEdit
 
