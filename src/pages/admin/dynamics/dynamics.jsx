import React, { useEffect, useState}  from 'react'
import {Card,Table,Button,Popconfirm} from 'antd'
import'antd/dist/antd.css'
import { listApi2 } from '../../../services/products'
import { delOne2 } from '../../../services/products'
import axios from 'axios'




  
function Dynamics (props) {
    const [dataSource,setDataSource]=useState([])
    useEffect(()=>{
        listApi2().then(res=>{
            console.log(res)
            
            setDataSource(res.data.items)
           
        }).catch(err=>{
            console.log(err)
        })
    },[])
  
    const columns=[{
        title:'序号',
        key:'id',
        width:80,
        align:'center'
        ,render:(txt,record,index)=>index+1
    },{
        title:'内容',
        dataIndex:'content'
    },
    {
        title:'标题',
        dataIndex:'title',
      
    },{
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
                             console.log(props)
                             console.log('用户确定删除');
                            //  调用Api接口修改数据
                            delOne2 (props.id).then(res => {
                             
                           console.log(res) 
                           listApi2().then(res=>{
                           console.log(res)
            
                          setDataSource(res.data.items)
           
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
    }]
    
    
        return (
           <Card title='公司动态' extra={<Button type='primary'onClick={()=>props.history.push("/admin/dynamics/edit")}>新增</Button>}>

                   <Table rowKey='id' pagination={{pageSize:4}}  columns={columns} bordered dataSource={dataSource}/>
                 
                 
           </Card>
        )
    }


export default Dynamics