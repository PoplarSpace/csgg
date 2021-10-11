import React,{useState,useEffect}from 'react'
import './index.css'
import axios from 'axios'
function Footer () {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("http://8.142.10.159:8001/changshi/link/findAllLink").then(res=>{
           
            setData(res.data.data.items)
        })
    },[])
 
    return (
        <div className='home-footer'>
            <div className='footer-top'>
            <span className='footer_span'>友情链接:  </span>
            <select  className='select' >
                {
                    data.map((item)=>{
                        return(
                           <option key={item.id}>{item.name}</option>
                        )
                    })
                }
            </select></div>
            <div className='footer-content'>©2012-2050 重庆长实钢结构有限公司</div>
        </div>
    )
}

export default Footer
