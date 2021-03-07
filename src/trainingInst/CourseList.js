import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './CourseList.css'
import SuperIcon from "../public/iconfront"

const fakeDataUrl = `https://www.fastmock.site/mock/9142235e76a55a305826abc2ebab29af/trainingInst/courses`;
const DataUrl = `lyxkaka.u1.luyouxia.net:50728/trainingInst/course`
const   CourseList = (props)=>{

    const [courseList, setCourseList] = useState([])

    useEffect(()=>{
        axios.get(fakeDataUrl).then(res=>{
            console.log(res.data)
            setCourseList(res.data.data)})
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
                                <SuperIcon className="kc" type="icon-biaoqiankuozhan_kecheng-131" />
                            }
                            title={item.name}
                            description={"所属培训机构:"+item.institutionName+" 通过分数: "+item.passScore}

                        />
                        <div className="Time" >{item.startTime.toString().split("T")[0] +` - `+item.endTime.toString().split("T")[0] }</div>
                        <div className="certificateState">{item.teachers.map(it=>it.name+" ")}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default CourseList