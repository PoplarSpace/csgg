import React from 'react'
import {Card,Input,Button,Form} from 'antd'
import axios from 'axios';


 function ContactEdit (props) { 
     //更改信息的方法
   const  handleSubmit =(values)  => {
      
        axios.post("http://8.142.10.159:8001/changshi/contact/updateContact",
        {content:values.content
          }).then(
            res=>{
            props.history.push('/admin/contact')
        }).catch(err=>{
            console.log(err);
        })
        
    }

        
    
   
  
        return (
          <Card title='联系方式编辑' bordered>
          <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
        
             <Form.Item label='内容' name={'content'}   rules={[
                                {
                                    required: true,
                                    message: '请输入信息内容!'
                                },
                            ]}>
                  
              <Input placeholder="请输内容" />
               </Form.Item>

               
                    <Form.Item>
                    <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button>
                    </Form.Item>
                </Form>
          </Card>
        )
    }

    export default ContactEdit
 
