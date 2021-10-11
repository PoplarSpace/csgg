import React from 'react'
import './index.css'
class Engineer extends React.Component {
   
    render(){
       
        console.log("123",this.props.location)
        const {title,writer,content,gmtCreate,url}=this.props.location.state
        return (
           <div className='trend_passage'>
               <h3 className='trend_title'>{title}</h3>
               <p className='trend_writer'>发布人 {writer} | 发布时间 {gmtCreate}</p>
               <div className='trend_photo'>
                {
                  url?  url.map((item)=>{
                        return(
                            <img  src={item} className='trend_photo_img' alt=''></img>
                        )
                    })
                    : []
                }
            </div>
               <p className='trend_content'>{content}</p>
           </div>
        )
    }
}

export default Engineer