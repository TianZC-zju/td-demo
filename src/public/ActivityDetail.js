import React, {useEffect, useState} from "react"
import {Breadcrumb,Button} from "antd"
import axios from "axios"
import "./ActivityDetail.css"
import Image from "antd/es/image"
import CourseList from "./CourseList"
import API from '../config/apiUrl'
import Header from "./Header"
import MyUseReducer from "./MyUseReducer";
import SC from './StringConst'
const {typeList} = SC
const ActivityDetail=()=>{
    const activityPost = JSON.parse(localStorage.getItem("activityPost"))
    const [ADState, ADDispatch] = MyUseReducer()
    const [activity, setActivity]=useState({})
    const [showappend, setshowappend] = useState(true)
    useEffect(()=>{

        console.log(activityPost)
        // if(activityPost.insId !== null)
        axios.post(API.insApi.getActivityByActivityId,{
            activityId:activityPost.activityId
        }).then(res=>{
            console.log(res)
            ADDispatch({
                type:typeList.setactivityInfo,
                value:res.data.activityList[0]
            })
        }).catch(er=>{
            console.log(er)
        })
        if(activityPost.stuId !== null){
            axios.post(API.stuApi.isStuHasActivity,{
                stuId:activityPost.stuId,
                activityId:activityPost.activityId,
            }).then(res=>{
                if(res.data.result.length === 0){
                    activityPost.isAttend = false
                }
            })
        }
        if(activityPost.isAttend){
            setshowappend(false)
        }else{
            setshowappend(true)
        }
    },[])
    const appendBtn=()=>(
        <Button onClick={()=>changeShowappend()} type="primary">立即参加</Button>
    )
    const disBtn=()=>(
        <Button onClick={()=>changeShowappend()}>取消参加</Button>
    )
    const changeShowappend =()=>{
        if(showappend === true && activityPost.stuId !== null ) {
            axios.post(API.stuApi.stuAddActivity, {
                stuId: activityPost.stuId,
                activityId: activityPost.activityId
            }).then(res => {
                console.log(res)
            })
        }
        // else if(showappend === false && activityPost.stuId !== null) {
        //
        // }
        setshowappend(!showappend)
    }
    const dataF=(data)=>{
        if(typeof data !== "string") {
            return data
        }else {
            return data.split("T")[0]
        }


    }
    return(
        <>
            <Header/>
            <div className="activity">
                <div className="activityTitle">
                    <Breadcrumb style={{ margin: '16px 10px' }}>
                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                        <Breadcrumb.Item>{activity.name}</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="firstContent">
                        <div className="logo">
                            <Image style={{width:"200px"}} src={ADState[typeList.seal]}></Image>
                        </div>
                        <div className="timeAndNumber">
                            <h1 className="activityName">{ADState[typeList.topic]}</h1>
                            <div className="someIntroduce">
                                <div className="startEndTime">{"开始时间: "+ dataF(ADState[typeList.start_time]) + " - "+ dataF(ADState[typeList.end_time])}</div>
                                <div className="attendNumbers">{"已经参加人数: "+ADState[typeList.capacity]}</div>
                            </div>
                            <div className="attendButton">
                                {showappend?appendBtn():disBtn()}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="activityContent">
                    <div className="introduction">
                        <h2 className="title">活动简介:</h2>
                        <div className="content">{ADState[typeList.description]}</div>
                    </div>
                    <div className="outline">
                        <h2 className="title">活动大纲:</h2>
                        <div className="content"><CourseList dataList={ADState[typeList.courseList]}/></div>
                    </div>
                    <div className="details">
                        <h2 className="title">活动详情:</h2>
                        <div className="content">{ADState[typeList.detail]}</div>
                    </div>
                    <div className="insIntroduce">
                        <h2 className="title">培训机构简介:</h2>
                        <div className="content">
                            <Image src={ADState[typeList.insInfo].logo} style={{width:"200px"}}></Image>
                            <div className="introduction">
                                <h3>{ADState[typeList.insInfo].name}</h3>
                                <div className="introductionContent">{ADState[typeList.insInfo].introduction}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ActivityDetail