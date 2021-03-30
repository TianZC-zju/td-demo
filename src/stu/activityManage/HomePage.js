import React, {useEffect, useState} from 'react'
import "./HomePage.css"
import { Carousel,Image,Card  } from 'antd';
import Header from "../../public/Header"
import {useHistory} from "react-router-dom"
import axios from "axios"
import API from "../../config/apiUrl"


const HomePage =()=>{
    function onChange(a, b, c) {
        // console.log(a, b, c);
    }
    const [courseList, setCourseList]= useState([])
    const history = useHistory()
    const gotoDetail =(activityId)=>{
        const activityPost = JSON.parse(localStorage.getItem("activityPost"))
        activityPost.activityId = activityId
        localStorage.setItem("activityPost", JSON.stringify(activityPost))
        history.push({
            pathname:'/ActivityDetail/1/-1',
        })
    }
    useEffect(()=>{
        axios.post(API.stuApi.getAllActiviyByState, {state:2}).then(res=>{
            console.log(res)
            setCourseList(res.data.activityList)
        })
    },[])
    return(
        <>
            <Header/>
            <div className="Homepage">
                <Carousel afterChange={onChange} autoplay>
                    <div className="myimg" >
                        <Image width={800} src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34ee51eec2c04012ba73cb14669e7b2e~tplv-k3u1fbpfcp-watermark.image"/>
                    </div>
                    <div className="myimg">
                        <Image width={800}  src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71799ed33644414b89ed2adae096422d~tplv-k3u1fbpfcp-watermark.image"/>
                    </div>
                    <div className="myimg">
                        <Image  width={800} src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b0c169aeaf046b68cffa71fe6671266~tplv-k3u1fbpfcp-watermark.image"/>
                    </div>
                    <div className="myimg">
                        <Image width={800}  src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b57f505e4b9e4ed59a266f614dc1f2b5~tplv-k3u1fbpfcp-watermark.image"/>
                    </div>
                </Carousel>
                <div className="courseCards">
                    <div className="zjc">
                        {courseList.map(it =>
                            <div className="card" onClick={()=>gotoDetail(it.id)}>
                                <Image
                                    src={it.seal}/>
                                <div className="content">
                                    <div className="activityName">{it.topic}</div>
                                    <div className="insName">{it.name}</div>
                                    <div className="description">{it.description}</div>
                                </div>
                            </div>)}


                    </div>

                </div>

            </div>
        </>

    )
}

export default HomePage