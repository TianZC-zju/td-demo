import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './CourseList.css'
import SuperIcon from "../public/iconfront"

const fakeDataUrl = `https://www.fastmock.site/mock/9142235e76a55a305826abc2ebab29af/trainingInst/courses`;

const   CourseList = (props)=>{

    const [courseList, setCourseList] = useState([])

    useEffect(()=>{
        axios.get(fakeDataUrl).then(res=>{setCourseList(res.data.data)})
    }, [])

    return(
        <List
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            //loadMore={loadMore}
            dataSource={courseList}
            bordered={true}
            split = {false}
            style={{backgroundColor:"white"}}
            renderItem={item => (
                <List.Item
                    actions={[<a key="course-edit">修改</a>, <a key="course-delete">删除</a>]}
                    style={{
                        backgroundColor:"white",
                    }}
                >
                    <Skeleton avatar title={false} loading={item.loading} active >

                        <List.Item.Meta
                            avatar={
                                <SuperIcon className="hj" type="icon-huojian" />
                            }
                            title={item.name}
                            description={"通过分数: "+item.passScore}

                        />
                        <div className="Time" >{item.startTime.toString().split("T")[0] +` - `+item.endTime.toString().split("T")[0] }</div>
                        <div className="certificateState">{item.certificateState?"已获得证书":"未获得证书"}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default CourseList