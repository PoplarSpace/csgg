import React, { useEffect, useState}  from 'react'
import {Card,Table,Button,Popconfirm} from 'antd'
import'antd/dist/antd.css'
import { listApi1 } from '../../../services/products'
import { delOne1 } from '../../../services/products'
import axios from 'axios'




  
function Bussiness (props) {
    const [dataSource,setDataSource]=useState([])
    useEffect(()=>{
        listApi1().then(res=>{
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
        title:'标题',
        dataIndex:'content'
    },
    {
        title:'图片资源',
        dataIndex:'url',
        render(txt,props) {
            return (
                <img src={props.url}
                 alt={props.name}
                 style={{ height:"100px" },{width:"200px"}}
                
                
                ></img>
            )
        }
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
                            delOne1 (props.id).then(res => {
                             
                           console.log(res) 
                           listApi1().then(res=>{
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
           <Card title='工程实例' extra={<Button type='primary'onClick={()=>props.history.push("/admin/business/edit")}>新增</Button>}>

                   <Table rowKey='id' pagination={{pageSize:4}}  columns={columns} bordered dataSource={dataSource}/>
                 
                 
           </Card>
        )
    }


export default Bussiness