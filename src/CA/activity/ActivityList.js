import {List, message, Skeleton} from 'antd'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"
import Api from "../../config/apiUrl"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"
// const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
// const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const ActivityList = (props)=>{
    const {CaApi} = Api
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

        axios({method: "post",
            url:CaApi.postAllActivity,
            data:{"phone":"12345678999",
                "page":1,
                "num":2,
                "filter":-1
            },
            withCredentials: true
        }).then(res=>{
            console.log(res)
        })
    }, [])
    const passItem=(e,index)=>{
        let Info = [...certificateList]
        Info[index][auditState]=1
        setCertificateList(Info)
        message.success("修改成功")
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
    const handleOk =()=>{
        console.log(1)
        setIsModalVisible(false);
        message.success("修改成功")
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
                        style={{
                            backgroundColor:"white",
                        }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active >

                            <List.Item.Meta
                                avatar={
                                    <SuperIcon className="student" type="icon-Student" />
                                }
                                title={item[activityName]}
                                description={`申请机构: ${item[insName]}  审核状态: ${item[auditState]===false?"未审核":"已经审核"}`}

                            />
                        </Skeleton>
                    </List.Item>
                )}
            />

            <Modal title="请输入拒绝的原因:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <Mentions rows={3} placeholder="请在这输入">

                </Mentions>

            </Modal>
        </>

    )
}
export default ActivityList