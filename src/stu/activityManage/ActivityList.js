import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './ActivityList.css'
import SuperIcon from "../../public/iconfront"
import {Link} from "react-router-dom"

const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
const dataUrl = `http://3n7998852l.wicp.vip/customer/activityManage`

const ActivityList = (props)=>{
    const [activityList, setActivityList] = useState([])

    // useEffect(()=>{
    //     const config ={
    //         headers:{token:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjEzMTMxMzEzMTMxIiwiZXhwIjoxNjE1Nzc0NzU3fQ.vMm-tDinM2FMbfSok17sw_8BswJdn1D-OYg-Bw-zaTU`}
    //     }
    //     axios.post(dataUrl,{},config).then(res =>{console.log(res)}).catch(e=>{console.log(e)})
    // }, [])
    useEffect(()=>{
        const config ={
            headers:{token:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjEzMTMxMzEzMTMxIiwiZXhwIjoxNjE1Nzc0NzU3fQ.vMm-tDinM2FMbfSok17sw_8BswJdn1D-OYg-Bw-zaTU`}
        }
        axios.post(fakeDataUrl2,{},config).then(res =>{

            setActivityList(res.data.data.activityList)
        })
    }, [])

    return(
        <List
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            //loadMore={loadMore}
            dataSource={activityList}
            bordered={true}
            split = {false}
            style={{backgroundColor:"white"}}
            renderItem={item => (
                <List.Item
                    actions={[<Link to={{pathname:"/ActivityDetail",state:{id:3} }}>查看详情</Link>]}
                    style={{
                        backgroundColor:"white",
                    }}
                >
                    <Skeleton avatar title={false} loading={item.loading} active >

                            <List.Item.Meta
                                avatar={
                                    <SuperIcon className="hj" type="icon-huojian" />
                                }
                                title={item.topic}
                                description={item.studentCourseList.map((it)=>`${it.courseName}: ${it.score} `)}

                            />
                        <div className="Time" >{item.startTime +`-`+item.endTime}</div>
                        <div className="certificateState">{item.certificateState?"已获得证书":"未获得证书"}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default ActivityList