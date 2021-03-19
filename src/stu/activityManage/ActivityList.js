import {List, message, Skeleton} from 'antd'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './ActivityList.css'
import SuperIcon from "../../public/iconfront"
import {useHistory} from "react-router"
import API from "../../config/apiUrl"
import {useParams} from "react-router-dom"

const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
const dataUrl = `http://3n7998852l.wicp.vip/customer/activityManage`

const ActivityList = (props)=>{
    const history = useHistory()
    const urlProps = useParams()
    let userId = null
    const [activityList, setActivityList] = useState([])

    useEffect(()=>{

        const config ={
            headers:{token:`eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwaG9uZSI6IjEzMTMxMzEzMTMxIiwiZXhwIjoxNjE2NDE2MDc5fQ.nxab8KNQ5AQfEAXbJzQE1HiTsXAaeXT4Dj7NGkaWUHs`}
        }
        axios.get(API.stuApi.getAllActivityByStuId+"1",config).then(res =>{
            console.log(res)
            setActivityList(res.data.activityList)
        })
    }, [])

    const gotoDetail =(activityId, stuId)=>{
        history.push({
            pathname:`/ActivityDetail/${activityId}/${stuId}`,
        })
        history.go(0)
    }
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
                    actions={[<a onClick={()=>gotoDetail(item.id, 1)}>查看详情</a>]}
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
                                description={item.courses.map((it)=>`${it.name}: ${it.pass_score}分   `)}

                            />
                        <div className="Time" >{item.start_time.toString().split("T")[0] +` - `+item.end_time.toString().split("T")[0]}</div>
                        <div className="certificateState">{item.state?"已获得证书":"未获得证书"}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default ActivityList