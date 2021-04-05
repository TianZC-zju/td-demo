import React, {useContext, useEffect} from 'react'
import MyContext from "./MyContext";
import SC from '../../public/StringConst'
import {List, Tabs, Table, Tag, Space, Input, InputNumber} from "antd";
import axios from "axios";
import API from '../../config/apiUrl'
import MyRS from "./MyStoreAndReducer";
import generateAPIDoc from "../../config/generateAPIDoc";



const {typeList } = SC
const { TabPane } = Tabs;
const { Column, ColumnGroup } = Table;
const StudentScore = ()=>{
    const {activityId, SSstate, SSdispatch, updateScore} = useContext(MyContext)

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
            generateAPIDoc("getAllStudentByCourseId", API.insApi.getAllStudentByCourseId+courseId, "", res.data)
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
                                   return( <InputNumber min={0} max={100}
                                       defaultValue={text[typeList.score]}
                                        onChange={(e)=>{
                                            updateScore({...text, score:e})
                                        }}
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
