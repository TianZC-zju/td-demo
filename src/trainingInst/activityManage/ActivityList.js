import {List, message, Skeleton} from 'antd';
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
import ActivityStateList from "../../public/ActivityStateList";
import generateAPIDoc from "../../config/generateAPIDoc";

const {typeList} = SC


const ActivityList = (props)=>{
    const {state, dispatch} = useContext(Context)
    const {insApi} =API
    const history = useHistory()
    const [scoreList, setscoreList ] = useState({})
    const [activityList, setActivityList] = useState([])
    const [isModalVisible,setisModalVisible] = useState(false)
    const [activityId, setactivityId] = useState(-1)
    const [SSstate, SSdispatch] = MyRS()
    useEffect(()=>{
        newList()
    }, [])

    const newList=()=>{
        axios({method: "get",
            url:insApi.getAllActivityByInsid+state.insId,
        }).then(res=>{
            generateAPIDoc("getAllActivityByInsid",insApi.getAllActivityByInsid+state.insId,"get","", res.data)
            setActivityList(res.data.activityList)
        })
    }
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
    const applyCA = (activitId2, index)=>{
        const AS = (activityList[index].state).toString()
        if(AS  !== "2" && AS  !== "6" ){
            message.error(ActivityStateList[AS] + ", 不能申请证书")
        }else{
            axios.get(API.insApi.applyCAByInsId+activitId2).then(res=>{
                generateAPIDoc("applyCAByInsId", API.insApi.applyCAByInsId+activitId2, "get", "", res.data)
                if(res.data.updateSuccess){
                    message.success("申请成功")
                }else {
                    message.error("申请失败")
                }
            })

        }

    }
    const handleOk =()=>{
        setisModalVisible(false)
        for (const index in scoreList) {
            const item = scoreList[index];
            console.log(item)
        }
        axios.post(API.insApi.updateScore,{scoreList}).then(res=>{
            generateAPIDoc("updateScore", API.insApi.updateScore, "post",{scoreList},res.data)
            if (res.data.updateSuccess){
                message.success("修改成绩成功")
            }else{
                message.error("修改成绩失败")
            }
            newList()
        })
    };
    const handleCancel =()=>{
        setisModalVisible(false)
    };
    const updateScore =(score)=>{
        setscoreList(state=>({...state, [`${score.id}${score.course_id}`]:score}))
    }
    const applyStu =(index)=>{
        const AS = (activityList[index].state).toString()
        if(AS  !== "0" && AS  !== "3" ){
            message.error(ActivityStateList[AS] + ", 不能申请招生")
        }else{
            axios.post(API.CaApi.updateActivityStateByActivityId,{
                state:1,
                activityId:activityList[index].id
            }).then(res=>{
                if(res.data.updateSuccess){
                    message.success("已申请")
                }else {
                    message.error("申请失败")
                }
                newList()
            })

        }
    }
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
            renderItem={(item, index) => (
                <List.Item
                    actions={[<a key="list-loadmore-edit" onClick={()=>gotoDetail(item.id)}>查看详情</a>,
                        <a key="list-addStudent" onClick={()=>applyStu(index)}>申请招生</a>,
                        <a key="list-register-marks" onClick={()=>registerMarks(item.id)}>录入成绩</a>,
                        <a key="list-apply-ca" onClick={()=>applyCA(item.id, index)}>申请证书</a>,
                    ]}
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
                        <div className="certificateState">{ActivityStateList[item.state]}</div>
                    </Skeleton>

                </List.Item>

            )}
        />
            <Modal title="成绩录入:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} >
                <MyContext.Provider value={{activityId, SSstate, SSdispatch, updateScore} }>
                    <StudentScore/>
                </MyContext.Provider>
            </Modal>
        </>
    )
}
export default ActivityList
