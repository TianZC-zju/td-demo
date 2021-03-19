import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../courseManage/CourseList.css'
import SuperIcon from "../../public/iconfront"
import API from "../../config/apiUrl"
import {useHistory} from "react-router"

const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const ActivityList = (props)=>{
    const {insApi} =API
    const history = useHistory()
    const [activityList, setActivityList] = useState([])
    useEffect(()=>{
        axios({method: "post",
            url:fakeDataUrl2,
            data:{
                "id":1,
                "page":1,
                "num":1
            },
            withCredentials: true
        }).then(res=>{
            // console.log(res)
            setActivityList(res.data.data.activityList)
        })
        // axios.post(dataUrl,{
        //     "name":"王田",
        //     "number":45,
        //     "description":"深入技术基础",
        //     "passScore":67,
        //     "startTime":"2020-01-02",
        //     "endTime":"2020-01-03",
        //     "teachers":[
        //         {"id":2
        //         }
        //     ]
        // }).then((res=>{
        //     console.log(res)
        // }))


    }, [])
    const gotoDetail =(id)=>{
        history.push({
            pathname:'/ActivityDetail/1/-1',
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
                    actions={[<a key="list-loadmore-edit" onClick={()=>gotoDetail(item.id)}>查看详情</a>]}
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