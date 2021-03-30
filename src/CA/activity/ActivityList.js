import {List, message, Skeleton} from 'antd'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"
import API from "../../config/apiUrl"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"
import StringConst from "../../public/StringConst";
import ActivityStateList from "../../public/ActivityStateList";


const {typeList} = StringConst
const ActivityList = (props)=>{
    const {activityName, insName,auditState} = NameIndex
    const dataInit=[{
        [activityName]:"火箭制造",
        [insName]:"天天培训机构",
        [auditState]:false
    },
        {
        [activityName]:"飞机制造",
        [insName]:"天天培训机构2",
        [auditState]:false
    },
        {
        [activityName]:"汽车制造",
        [insName]:"天天培训机构2",
        [auditState]:true
    },

    ]
    const [certificateList, setCertificateList] = useState(dataInit)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [activityList, setActivityList] = useState(dataInit)
    useEffect(()=>{

        axios({method: "get",
            url:API.CaApi.getAllActivityApplyStu,
        }).then(res=>{
            setActivityList(res.data.activityList)
        })
    }, [])
    const passItem=(e,index)=>{
        const AS = (activityList[index].state).toString()
        if(AS  !== "1" && AS  !== "3" ){
            message.error(ActivityStateList[AS] + ", 不能申请招生")
        }else {
            axios.post(API.CaApi.updateActivityStateByActivityId,{
                activityId:activityList[index].id,
                state: 2
            }).then(res=>{
                console.log(res)
            })
            message.success("修改成功")
        }

    }
    const refuseItem=(e,index)=>{
        let Info = [...certificateList]
        Info[index][auditState]=2
        setCertificateList(Info)
        setIsModalVisible(true)


    }


    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleOk =(index)=>{
        console.log(index)
        setIsModalVisible(false);
        message.success("修改成功")
        // const AS = (activityList[index].state).toString()
        // if(AS  !== "1" && AS  !== "3" ){
        //     message.error(ActivityStateList[AS] + ", 不能申请招生")
        // }else {
        //     axios.post(API.CaApi.updateActivityStateByActivityId,{
        //         activityId:activityList[index].id,
        //         state: 3
        //     }).then(res=>{
        //         console.log(res)
        //     })
        //     message.success("修改成功")
        // }
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
                        <Modal title="请输入拒绝的原因:" visible={isModalVisible} onOk={()=>handleOk(index)} onCancel={handleCancel}>

                            <Mentions rows={3} placeholder="请在这输入">

                            </Mentions>

                        </Modal>
                    </List.Item>
                )}
            />


        </>

    )
}
export default ActivityList