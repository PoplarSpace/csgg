import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Button } from 'antd';
import {  CommentOutlined, BulbOutlined  ,DesktopOutlined,EditOutlined ,WalletOutlined ,PhoneOutlined,SoundOutlined } from '@ant-design/icons';
import logo from '../../assets/logo.png'
import 'antd/dist/antd.css'
import {withRouter}from 'react-router-dom'
import './frame.css'





const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export class Frame extends Component {

    render(props) {
    
        return (
            
                <Layout>
    <Header className="header" style={{backgroundColor:'#428bca'  ,height: "80px"}} >
      <div className="logo" >
    <img src={logo} alt='logo' style={{width:'80px',height:"80px" }}/>
   
      </div>
     
      <Button type='primary'  onClick={()=> {
      
      this.props.history.push('/HomePage') 
       localStorage.removeItem("token")
       
      }
      } style={{backgroundColor:"#0B0C0D",marginTop: "2vh",
   width: "60px",
   height: "40px"}} > 
      
      退出</Button>
    
    </Header>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
            <Menu.Item key="/admin/dashboard"icon={<DesktopOutlined /> } onClick={(p)=>this.props.history.push(p.key )}>访问页面</Menu.Item>
            <Menu.Item key="/admin/products/list" icon={<BulbOutlined />} onClick={(p)=>this.props.history.push(p.key )}>工程实例</Menu.Item>
            <Menu.Item key="/admin/business"  icon={<CommentOutlined />} onClick={(p)=>this.props.history.push(p.key )}>主营业务</Menu.Item>
            <Menu.Item key="/admin/dynamics"  icon={<EditOutlined />} onClick={(p)=>this.props.history.push(p.key )}>公司动态</Menu.Item>
            <Menu.Item key="/admin/link"  icon={<WalletOutlined />} onClick={(p)=>this.props.history.push(p.key )}>友情链接</Menu.Item>
            <Menu.Item key="/admin/contact"  icon={<PhoneOutlined />} onClick={(p)=>this.props.history.push(p.key )}>联系方式</Menu.Item>
            <Menu.Item key="/admin/announcement"  icon={<SoundOutlined />} onClick={(p)=>this.props.history.push(p.key )}>通知公告</Menu.Item>
            
        </Menu>
      </Sider>
      <Layout style={{ padding: '16px 24px 24px' }}>
     
        <Content
          className="site-layout-background"
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            
          
          }}
        >
     {this.props.children}
        </Content>
      </Layout>
    </Layout>
  </Layout>

           
        )
    }
}

export default withRouter (Frame)
