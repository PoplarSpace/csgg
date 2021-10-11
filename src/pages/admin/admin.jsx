import React, { Component } from 'react'
import Frame from '../../component/Frame/frame'
import 'antd/dist/antd.css'
import { Switch,Route,Redirect } from 'react-router-dom'
import List from './products/List'
import Index from './dashboard'

import './admin.css'
import Business from './business/business'
import Edit from './products/Edit'
import { isLogined } from '../../utils/auth'
import EditBus from './business/edit-bus'
import Dynamics from '../admin/dynamics/dynamics'
import EditDyn from '../admin/dynamics/dyn-edit'
import LinkExchange from './link/linkexchange'
import ContactWay from './contact/contact'
import Announcement from './announcement/announcement'
import LinkEdit from './link/linkEdit'
import ContactEdit from './contact/contactEdit'
import AnnouncementEdit from './announcement/announcementEdit'
export class Admin extends Component {
    render() {
        return (
          isLogined()
            ?
          
          (
        
          <Frame>
            <Switch>
                <Route path='/admin/products/list' component={List} title='列表'/>
                <Route path='/admin/dashboard' component={Index} title='看板'/>
                <Route path='/admin/business/edit' component={EditBus} title='商务编辑'/>
                <Route path='/admin/business' component={Business} title='商务'/>
                <Route path='/admin/products/edit' component={Edit} title='产品编辑'/>
                <Route path='/admin/dynamics/edit' component={EditDyn} title='商务编辑'/>
                <Route path='/admin/dynamics' component={Dynamics} title='商务'/>
                <Route path='/admin/link/edit' component={LinkEdit}  title='友情链接编辑'/>
                <Route path='/admin/link' component={LinkExchange}  title='友情链接'/>
                <Route path='/admin/contact/edit' component={ContactEdit}  title='联系方式编辑'/>
                <Route path='/admin/contact' component={ContactWay}  title='联系方式'/>
                <Route path='/admin/announcement/edit' component={AnnouncementEdit}  title='通知公告编辑'/>
                <Route path='/admin/announcement' component={Announcement}  title='通知公告'/>
              


            </Switch>
            <Redirect to='/admin/dashboard'></Redirect>
          
          </Frame>)
          :(<Redirect to='/login'></Redirect>  
          
           ) 
          
        
        )
         
    }
}

export default Admin
