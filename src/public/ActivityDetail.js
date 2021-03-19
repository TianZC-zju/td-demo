import { useParams} from "react-router-dom"
import React, {useEffect, useState} from "react"
import {Breadcrumb,Button} from "antd"
import axios from "axios"
import "./ActivityDetail.css"
import Image from "antd/es/image"
import CourseList from "./CourseList"
import API from '../config/apiUrl'
import Header from "./Header"
const fakeDataUrl = `https://www.fastmock.site/mock/9142235e76a55a305826abc2ebab29af/trainingInst/customer/activityDetail`





const ActivityDetail=()=>{
    const urlProps = useParams()

    const activityId = urlProps.activityId
    const userId = urlProps.userId
    const [topic, settopic] = useState("")
    const [activity, setActivity]=useState({})
    const [activityDe, setActivityDe]=useState({})
    const [eduInstitution, setEduInstitution] = useState({})
    const [showappend, setshowappend] = useState(true)
    useEffect(()=>{
        if(userId!=="-1" ){
            setshowappend(false)
        }
        axios.get(fakeDataUrl+"/3").then(res=>{
            setActivity(res.data)
            setActivityDe(res.data.Activity)
            setEduInstitution(res.data.EduInstitution)
        })

        axios.post(API.stuApi.postActivityByid,{
            activityId,
            userId
        }).then(res=>{
            settopic(res.data.data[0].topic)
            // setActivity(res.data)
            // setActivityDe(res.data.Activity)
            // setEduInstitution(res.data.EduInstitution)
        })
    },[])
    const appendBtn=()=>(
        <Button onClick={()=>changeShowappend()} type="primary">立即参加</Button>
    )
    const disBtn=()=>(
        <Button onClick={()=>changeShowappend()}>取消参加</Button>
    )
    const changeShowappend =()=>{
        setshowappend(!showappend)
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
                            <Image style={{width:"200px"}} src={activityDe.seal}></Image>
                        </div>
                        <div className="timeAndNumber">
                            <h1 className="activityName">{topic}</h1>
                            <div className="someIntroduce">
                                <div className="startEndTime">{"开始时间: "+ activityDe.startTime + " - "+ activityDe.endTime}</div>
                                <div className="attendNumbers">{"已经参加人数: "+activity.numbers}</div>
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
                        <div className="content">{activityDe.introduction}</div>
                    </div>
                    <div className="outline">
                        <h2 className="title">活动大纲:</h2>
                        <div className="content"><CourseList dataList={activityDe.courses}/></div>
                    </div>
                    <div className="details">
                        <h2 className="title">活动详情:</h2>
                        <div className="content">{activityDe.detail}</div>
                    </div>
                    <div className="insIntroduce">
                        <h2 className="title">培训机构简介:</h2>
                        <div className="content">
                            <Image src={eduInstitution.logo} style={{width:"200px"}}></Image>
                            <div className="introduction">
                                <h3>{eduInstitution.name}</h3>
                                <div className="introductionContent">{eduInstitution.introduction}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default ActivityDetail