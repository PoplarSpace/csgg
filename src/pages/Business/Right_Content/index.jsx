import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
export default class Right_Content extends Component {
    state = {
        business:[]
    }
    componentDidMount(){
        axios.get('http://8.142.10.159:8001/changshi/business/findAll').then(
            res=>{
              
                console.log(res.data.data.items)
                this.setState({business:res.data.data.items})
            },
            err=>{console.log(err)}
        ).catch(rea=>{
            console.log(rea);
        })
    }
    render() {
        return (
            <div id="content_shell">
                <div className="right_title">
                    <h2 className="title_h3">主营业务</h2>
                    <hr/>
                </div>
                <div className="business_right_content">             
                    {
                        this.state.business.map(data=>{
                            return(
                                <div className="Business_content" key={data.id}><img class="business_img" src={data.url} alt="" />{data.content}</div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
