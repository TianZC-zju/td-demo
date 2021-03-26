import React, {useContext, useEffect} from 'react'
import MyContext from "./MyContext";
import SC from '../../public/StringConst'
import {List, Tabs, Table, Tag, Space, Input} from "antd";
import axios from "axios";
import API from '../../config/apiUrl'
import MyRS from "./MyStoreAndReducer";



const {typeList } = SC
const { TabPane } = Tabs;
const { Column, ColumnGroup } = Table;
const StudentScore = ()=>{
    const {activityId, SSstate, SSdispatch} = useContext(MyContext)

    useEffect(()=>{
        axios.post(API.insApi.getActivityByActivityId,{activityId}).then(res=>{

            SSdispatch({
                type:typeList.setcourseList,
                value:res.data.activityList[0].courses
            })
        })
    },[])
    const callback = (courseId)=>{
        axios.get(API.insApi.getAllStudentByCourseId+courseId).then(res=>{
            SSdispatch({
                type:typeList.setstudentsAndScores,
                value:res.data.studentList
            })
        })
    }
    return(
        <Tabs defaultActiveKey="1" onChange={(key)=>callback(key)} >
            {
                SSstate.courses.map(it=>(
                    <TabPane tab={it.name} key={it.id}>
                        <Table dataSource={SSstate[typeList.studentsAndScores]}>

                            <Column title="学号" dataIndex={typeList.id} key={typeList.id} />
                            <Column title="姓名" dataIndex={typeList.name} key={typeList.name} />

                            <Column
                                title="成绩"
                                key={typeList.score}
                                render={(text, record) => {
                                   return( <Input
                                       defaultValue={text[typeList.score]}
                                        onchange={(e)=>SSdispatch({
                                            type:typeList.updateStudentScore,
                                            value:{...text,[typeList.score]:e.target.value}
                                        })}
                                    />)
                                }}
                            />
                        </Table>
                    </TabPane>
                ))
            }

        </Tabs>
    )
}

export default StudentScore