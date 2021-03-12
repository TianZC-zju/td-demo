import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import '../courseManage/CourseList.css'
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"

// const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
// const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const StudentList = (props)=>{
    const {name, phoneNumber,age} = NameIndex
    const dataInit=[{
        [name]:"galen",
        [age]:17,
        [phoneNumber]:"13003069685"
    },
    {
        [name]:"bilibili",
        [age]:33,
        [phoneNumber]:"13003069685"
    },
    {
        [name]:"李华",
        [age]:27,
        [phoneNumber]:"13003069685"
    },
    ]
    const [studentList, setStudentList] = useState(dataInit)
    // useEffect(()=>{
    //     axios({method: "post",
    //         url:fakeDataUrl2,
    //         data:{filter:0},
    //         withCredentials: true
    //     }).then(res=>{
    //         setStudentList(res.data.data.studentList)
    //     })
    // }, [])
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
                            description={`年龄: ${item[age]}  手机号码: ${item[phoneNumber]}`}

                        />
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default StudentList