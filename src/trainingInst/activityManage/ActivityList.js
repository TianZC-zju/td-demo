import { List, Skeleton } from 'antd';
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import '../courseManage/CourseList.css'
import SuperIcon from "../../public/iconfront"
import API from "../../config/apiUrl"
import {useHistory} from "react-router"
import Context from "../studentMange/MyContext"
import Modal from "antd/es/modal";
import MyContext from "./MyContext";
import SC from '../../public/StringConst'
import StudentScore from "./StudentScore";
import MyRS from "./MyStoreAndReducer";


const {typeList} = SC


const ActivityList = (props)=>{
    const {state, dispatch} = useContext(Context)
    const {insApi} =API
    const history = useHistory()

    const [activityList, setActivityList] = useState([])
    const [isModalVisible,setisModalVisible] = useState(false)
    const [activityId, setactivityId] = useState(-1)
    const [SSstate, SSdispatch] = MyRS()
    useEffect(()=>{
        axios({method: "get",
            url:insApi.getAllActivityByInsid+state.insId,
        }).then(res=>{
            setActivityList(res.data.activityList)
        })


    }, [])
    const gotoDetail =(id)=>{
        const activityPost = {
            insId:state.insId,
            stuId:null,
            activityId:id,
            isAttend:false,
        }
        localStorage.setItem("activityPost", JSON.stringify(activityPost))
        history.push({
            pathname:'/ActivityDetail/',
        })
        history.go(0)
    }
    const registerMarks = (activitId2)=>{

        setactivityId(activitId2)
        setisModalVisible(true)
    }
    const handleOk =()=>{
        setisModalVisible(false)
        console.log(SSstate[typeList.studentsAndScores])
    };
    const handleCancel =()=>{
        setisModalVisible(false)
    };
    return(
        <>
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
                    actions={[<a key="list-loadmore-edit" onClick={()=>gotoDetail(item.id)}>查看详情</a>,
                        <a key="list-register-marks" onClick={()=>registerMarks(item.id)}>录入成绩</a>]}
                    key={item.id}
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
                            description={item.courses.map((it)=>`${it.name}: ${it.pass_score} `)}

                        />
                        <div className="Time" >{item.start_time.toString().split("T")[0] +` - `+item.end_time.toString().split("T")[0]}</div>
                        <div className="certificateState">{item.state?"已获得证书":"未获得证书"}</div>
                    </Skeleton>

                </List.Item>

            )}
        />
            <Modal title="成绩录入:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                <MyContext.Provider value={{activityId, SSstate, SSdispatch} }>
                    <StudentScore/>
                </MyContext.Provider>
            </Modal>
        </>
    )
}
export default ActivityList