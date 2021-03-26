import { List, Skeleton } from 'antd';
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import './CourseList.css'
import SuperIcon from "../../public/iconfront"
import Context from "../studentMange/MyContext";
import API from "../../config/apiUrl"
import {useHistory} from "react-router-dom";

const   CourseList = (props)=>{
    const {state, dispatch} = useContext(Context)
    const [courseList, setCourseList] = useState([])
    const history = useHistory()
    useEffect(()=>{
        axios.get(API.insApi.getAllCourseListByInsId+state.insId).then(res=>{
            setCourseList(res.data.courseList)
            })
    }, [])
    const courseEdit = (index)=>{
        localStorage.setItem("courseInfo", JSON.stringify(courseList[index]))
        history.push({pathname:"/ins/NewCourse"})

    }
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
            renderItem={(item, index) => (
                <List.Item
                    actions={[<a key="course-edit" onClick={()=>courseEdit(index)} >修改</a>, <a key="course-delete">删除</a>]}
                    key={item.id}
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
                            description={"所属培训机构:"+item.edu_institution+" 通过分数: "+item.pass_score}

                        />
                        <div className="Time" >{item.start_time.toString().split("T")[0] +` - `+item.end_time.toString().split("T")[0] }</div>
                        <div className="certificateState">{item.teacherList.map(it=>it.name+" ")}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default CourseList