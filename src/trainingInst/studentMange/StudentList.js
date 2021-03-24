import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../courseManage/CourseList.css'
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"
import API from "../../config/apiUrl"
import {useContext} from 'react'
import Context from "../studentMange/MyContext";

// const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
// const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const StudentList = (props)=>{
    const {state, dispatch} = useContext(Context)
    const {name, phoneNumber,gender} = NameIndex
    const [studentList, setStudentList] = useState([])
    useEffect(()=>{
        axios({method: "get",
            url:API.insApi.getAllStudentByInsId+state.insId,
        }).then(res=>{
            console.log(res.data.studentList)
            setStudentList(res.data.studentList)
        })
    }, [])
    return(
        <List
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            //loadMore={loadMore}
            dataSource={studentList}
            bordered={true}
            split = {false}
            style={{backgroundColor:"white"}}
            renderItem={item => (
                <List.Item
                    actions={[<a key="list-loadmore-edit">删除</a>]}
                    style={{
                        backgroundColor:"white",
                    }}
                >
                    <Skeleton avatar title={false} loading={item.loading} active >

                        <List.Item.Meta
                            avatar={
                                <SuperIcon className="student" type="icon-Student" />
                            }
                            title={item[name]}
                            description={`性别: ${item[gender] === 1?"男":"女"}  手机号码: ${item[phoneNumber]}`}

                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default StudentList