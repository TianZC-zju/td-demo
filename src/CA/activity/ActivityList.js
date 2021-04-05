import {List, message, Skeleton} from 'antd'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import API from "../../config/apiUrl"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"
import StringConst from "../../public/StringConst";
import ActivityStateList from "../../public/ActivityStateList";
import generateAPIDoc from "../../config/generateAPIDoc";


const {typeList} = StringConst
const ActivityList = (props)=>{
    const [reject_reason,setreject_reason] = useState("")
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(1)
    const [activityList, setActivityList] = useState([])
    useEffect(()=>{
        newList()

    }, [])
    const newList=()=>{
        axios({method: "get",
            url:API.CaApi.getAllActivityApplyStu,
        }).then(res=>{
            setActivityList(res.data.activityList)
            generateAPIDoc("getAllActivityApplyStu",API.CaApi.getAllActivityApplyStu,"get","",res.data)
        })
    }
    const passItem=(e,index)=>{
        const AS = (activityList[index].state).toString()
        if(AS  !== "1" && AS  !== "3" ){
            message.error(ActivityStateList[AS] + ", 不能申请招生")
        }else {
            axios.post(API.CaApi.updateActivityStateByActivityId,{
                activityId:activityList[index].id,
                state: 2
            }).then(res=>{
                generateAPIDoc("updateActivityStateByActivityId", API.CaApi.updateActivityStateByActivityId, "post",{
                    activityId:activityList[index].id,
                    state: 2
                },res.data )
                if(res.data.updateSuccess){
                    message.success("活动申请招生完成")
                    newList()
                }else {
                    message.error("申请招生失败")
                }
            })
            message.success("修改成功")
        }

    }
    const refuseItem=(e,index)=>{
        const AS = (activityList[index].state).toString()
        if(AS  !== "1" ){
            message.error(ActivityStateList[AS] )
            return
        }
        setcurrentIndex(index)
        setIsModalVisible(true)


    }


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk =()=>{

        setIsModalVisible(false);
        axios.post(API.CaApi.updateActivityRejectReasonByActivityId,{
            state:3,
            reject_reason,
            activityId:activityList[currentIndex].id
        }).then(res=>{
            generateAPIDoc("updateActivityRejectReasonByActivityId", API.CaApi.updateActivityRejectReasonByActivityId, "post",{
                state:3,
                reject_reason,
                activityId:activityList[currentIndex].id
            }, res.data)
            if(res.data.updateSuccess){
                message.success("修改成功")
                newList()
            }else{
                message.error("修改失败")
            }
        })

    }
    const changeRejectReason =(e)=>{
        setreject_reason(e)
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
                        actions={[<a key="list-loadmore-edit">详情</a>,<a onClick={e=>passItem(e,index)}>通过</a>,<a onClick={e=>refuseItem(e,index)}>拒绝</a>]}
                        key={item[typeList.id]}
                        style={{
                            backgroundColor:"white",
                        }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active >

                            <List.Item.Meta
                                avatar={
                                    <SuperIcon className="student" type="icon-Student" />
                                }
                                title={item[typeList.topic]}
                                description={`申请机构: ${item[typeList.insName]}  审核状态: ${ActivityStateList[item[typeList.state]]}`}

                            />
                        </Skeleton>
                        <Modal title="请输入拒绝的原因:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                            <Mentions rows={3} placeholder="请在这输入" onChange={(e)=>changeRejectReason(e)}>

                            </Mentions>

                        </Modal>
                    </List.Item>
                )}
            />


        </>

    )
}
export default ActivityList
