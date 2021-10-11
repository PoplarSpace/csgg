import React, { useEffect, useState}  from 'react'
import {Card,Table,Button, Popconfirm} from 'antd'
import 'antd/dist/antd.css'
import axios from 'axios'


function ContactWay(props) {
    //调用接口获取数据
    const [data,setData]=useState([]);
    useEffect(()=>{
         axios.get('http://8.142.10.159:8001/changshi/contact/findContact').then(res=>{
          
         
            setData(res.data.data.items)
         }).catch(rea=>{
             console.log(rea);
         })
    },[])
  //表头数据
    const columns=[
        {
            title:"序号",
            key:'id',
            width:80,
            align:'center'
            ,render:(txt,record,index)=>index+1
            

        },
        {
            title:"内容",
            dataIndex:'content'
        },
        {
            title:'操作',
            render:(props)=>{
                return(
                 <div>

     <Popconfirm title="确定删除？"  
                      onCancel={()=>{
                        console.log('用户取消删除')
                    }}
                     onConfirm={
                         (e)=>{
                            
                             console.log('用户确定删除');
                            //  调用Api接口修改数据
                          axios.delete ("http://8.142.10.159:8001/changshi/contact/deleteContact/"+props.id).then(res => {
                             
                          
                           axios.get("http://8.142.10.159:8001/changshi/contact/findContact").then(res=>{
                      
            
                           setData(res.data.data.items)
           
                        }).catch(err=>{
                        console.log(err)
                        })
                          });
                         }
                     }
                    
                    >
                    <Button type='danger' size='small' style={{margin:"0 1rem"}}>删除</Button>
                    </Popconfirm>
                 </div>
                )
            }
        }
    
    ]




    return (
        <div>
             <Card title="联系方式" extra={<Button type='primary'onClick={()=>props.history.push("/admin/contact/edit")}>新增</Button>}>
                 <Table  rowKey='id' pagination={{pageSize:7}}  columns={columns} bordered dataSource={data}  />
             </Card>
        </div>
    )
}

export default ContactWay