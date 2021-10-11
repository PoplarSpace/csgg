import React, { Component } from 'react'
import { withRouter } from 'react-router'
import './index.css'
import axios from 'axios'
 class Display_content extends Component {
    state={
        data:[]
    }
   
    send=(a)=>{
        axios.get(`http://8.142.10.159:8001/changshi/news/findNewsById/${a.id}`).then(res=>{
         
        console.log("ooo",res);
        this.setState({
            data:res.data.data.item
            
        })
        this.props.history.push('/Trends/engineer',this.state.data)
           
        })
       
}

    render() {
        const {display_items} = this.props


        return (
            <div className="trend_shell">
                {/* 内容展示区 */}
                {
                    display_items.map(display=>{
                        return(
                            <div key={display.id} className="trend_outer_shell" onClick={()=>this.send(display) } >
                                <div className="trend_display_content">{display.title}</div>
                                <div className="trend_display_content_time">{display.gmtCreate}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
export default withRouter(Display_content)