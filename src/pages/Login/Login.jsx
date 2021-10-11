import React, { Component } from 'react'
import {Card} from 'antd'
import { Form, Input, Button, message} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './login.css'
import { setToken } from '../../utils/auth'; 

export default  class Login extends Component {
    formRef = React.createRef()
	onCheck = async (props) => {
	  try {
	    const values = await this.formRef.current.validateFields();
       
        if(values.username=="admin"&&values.password==="admin"){
	     
	      message.success('提交校验成功')
        
        setToken(values.username);
        this.props.history.push('/admin/dashboard')
        }
        else{
        message.warn('用户名或者账号错误')
        }
        
	  } catch (errorInfo) {
	   
	    message.warn('提交校验失败')
	  }
	}
	

    render() {
        
       
        const onFinish = (values) => {
            console.log('Received values of form: ', values);
          };
          
        return (
          <div className='warp'>
          <Button   className='but-back' onClick={()=>this.props.history.push('/HomePage') } type='primary'>返回</Button>
          <Card title='后台登入' bordered  className="login-form">
                 <Form name="normal_login"  initialValues={{   remember: true,   } }   ref={this.formRef} 
          onFinish={onFinish} className='form'
         >
           <Form.Item
         name="username"
         rules={[
          {
            required: true,
            message: '请输入用户名!',
          },
        ]}
        className='form-item-one'
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入密码!',
          },
        ]}
        className='form-item-two'
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="密码"
        />
      </Form.Item>
     

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={this.onCheck}>
          登入
        </Button>
       
      </Form.Item>
    </Form>
          </Card>
          </div>
        )
    };
}


