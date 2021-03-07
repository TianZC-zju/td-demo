import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './CourseList.css'
import SuperIcon from "../public/iconfront"

const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;

const TIActivityManagement = (props)=>{
    const [activityList, setActivityList] = useState([])
    useEffect(()=>{
        axios({method: "post",
            url:fakeDataUrl2,
            data:{filter:0},
            withCredentials: true
        }).then(res=>{
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
                    actions={[<a key="list-loadmore-edit">查看详情</a>]}
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
export default TIActivityManagement