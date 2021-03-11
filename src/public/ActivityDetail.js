import {useLocation} from "react-router-dom"
import React, {useEffect, useState} from "react"
import {Breadcrumb,Button} from "antd"
import axios from "axios"
import "./ActivityDetail.css"
import Image from "antd/es/image"
import CourseList from "./CourseList"

const fakeDataUrl = `https://www.fastmock.site/mock/9142235e76a55a305826abc2ebab29af/trainingInst/customer/activityDetail`





const ActivityDetail=(props)=>{
    const location = useLocation()

    location&&location.state&&location.state.id&&localStorage.setItem("activityId",location.state.id.toString())
    const activityId = location.state.id || localStorage.getItem("activityId")
    const [activity, setActivity]=useState({})
    const [activityDe, setActivityDe]=useState({})
    const [eduInstitution, setEduInstitution] = useState({})
    useEffect(()=>{
        axios.get(fakeDataUrl+`/:+${activityId}`).then(res=>{
            setActivity(res.data)
            setActivityDe(res.data.Activity)
            setEduInstitution(res.data.EduInstitution)
        })
    },[])
    return(
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
                        <h1 className="activityName">{activity.name}</h1>
                        <div className="someIntroduce">
                            <div className="startEndTime">{"开始时间: "+ activityDe.startTime + " - "+ activityDe.endTime}</div>
                            <div className="attendNumbers">{"已经参加人数: "+activity.numbers}</div>
                        </div>
                        <div className="attendButton">
                            <Button>立即参加</Button>
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
    )
}
export default ActivityDetail