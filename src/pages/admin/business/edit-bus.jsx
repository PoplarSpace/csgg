import React , { useState }from 'react'
import {Card,Input,Button,Form,Upload} from 'antd'
import { createApi1 } from '../../../services/products'

import {serverUrl1} from '../../../utils/config'
 function EditBus (props) {





    
    
   const  handleSubmit =(values)  => {
       
        createApi1({content:values.content
          
          ,url:values.url.file.response.data.url}).then(res=>{
           
            props.history.push('/admin/business')
        }).catch(err=>{
            console.log(err);
        })
        
    }
//  上传功能
    const [imageUrl, setImageUrl] = useState("");
   
    const uploadButton = (
        <div>
     
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const handleChange = info => {
        //上传中....
        if (info.file.status === "uploading") {
          console.log('false')
          return;
        }
        if (info.file.status === "done") {
          // 上传成功
          console.log(info.file.response.data);
          setImageUrl(info.file.response.data);
         console.log('true')
        }
      };
    
   
  
        return (
          <Card title='主营业务编辑' bordered>
                <Form onFinish={(e)=>handleSubmit(e)} scrollToFirstError >
        
                    <Form.Item label='标题' name={'content'}   rules={[
                                {
                                    required: true,
                                    message: '请填写业务名字!'
                                },
                            ]}>
                  
         <Input placeholder="请填写业务名字" />
                    </Form.Item>
                  <Form.Item label='图片' name={'url'}>
                  <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            action={serverUrl1}
            onChange={info => handleChange(info)}
          >
            {imageUrl ? (
              <img
                src={ imageUrl.url}
                alt="avatar"
                style={{ width: "100%" }} 
              />
            ) : (
              uploadButton
            )}
          </Upload>
                  </Form.Item>
                  
                   
              

                  
                    <Form.Item>
                    <Button  htmlType="submit"   type='primary'style={{backgroundColor:"#428BCA"}}>保存</Button></Form.Item>
                </Form>
          </Card>
        )
    }

    export default EditBus
 
