import React , { useState }from 'react'
import {Card,Input,Button,Form,Upload} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import { createApi2} from '../../../services/products'
import axios from 'axios';

const { TextArea } = Input;
 function EditDyn (props) {





    
    
   const  handleSubmit =(values)  => {
     console.log(values);
    const ul=values.url.fileList.map((item)=>{
        return item.response.data.url } )
     const Url=ul.toString().split(",")
       console.log(Url);
    const mes=values.tit.replace("/n","//n")
        createApi2({content:values.content
          
          ,title:mes,writer:'admin',url:Url  }).then(res=>{
           
            props.history.push('/admin/dynamics')
        }).catch(err=>{
            console.log(err);
        })
        axios.get(`http://8.142.10.159:8001/changshi/news/findNewsById/${"9066296d0d174cffb20b6778c8e15da1"}`).then(res=>{
            console.log(res);
        })
    }
  //  上传功能
  const [fileList,setFileList]=useState([])
       
  //取消功能
  
  
  //检测变化
  const handleChange = ( {fileList} ) =>{
    setFileList( fileList )
   console.log(fileList );
  };
  //组件
  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );
        
    
   
  
        return (
          <Card title='动态编辑' bordered>
                <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
        
                    <Form.Item label='标题' name={'tit'}   rules={[
                                {
                                    required: true,
                                    message: '请填动态标题!'
                                },
                            ]}>
                  
         <Input placeholder="请输动态标题" />
                    </Form.Item>

                    <Form.Item label='内容' name={'content'}   rules={[
                                {
                                    required: true,
                                    message: '请输入动态信息!'
                                },
                            ]}>
                  
                  <TextArea placeholder="请输入动态信息!" allowClear  style={{height:'200px'}}/>
 
                    </Form.Item>
                    <Form.Item label='图片' name={'url'}>
                    <Upload
          action={"http://8.142.10.159:8001/changshi/news/upload"}
          listType="picture-card"
          fileList={fileList}
          onChange={handleChange}
        >    
          {fileList.length >= 5 ? null : uploadButton}
        </Upload>
          
                  </Form.Item>
              

                  
                    <Form.Item>
                    <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button></Form.Item>
                </Form>
          </Card>
        )
    }

    export default EditDyn
 
