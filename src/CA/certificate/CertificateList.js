import {List, message, Skeleton, Form} from 'antd'
import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"

// const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
// const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const CertificateList = (props)=>{
    const numToState={
        0:"未审核",
        1:"已审核",
        2:"已拒绝"
    }
    const {activityName, applicant,applicationNum,template,auditState,introduction } = NameIndex
    const dataInit=[{
        [activityName]:"火箭制造",
        [applicant]:"李老师",
        [applicationNum]:45,
        [template]:"证书模板一",
        [auditState]:0,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
     {
        [activityName]:"火箭制造",
        [applicant]:"李老师",
        [applicationNum]:45,
        [template]:"证书模板一",
        [auditState]:0,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
     {
        [activityName]:"飞机制造",
        [applicant]:"田老师",
        [applicationNum]:45,
        [template]:"证书模板一",
        [auditState]:0,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
     {
        [activityName]:"汽车制造",
        [applicant]:"王老师",
        [applicationNum]:46,
        [template]:"证书模板一",
        [auditState]:0,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
    ]
    const [certificateList, setCertificateList] = useState(dataInit)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm();
    // useEffect(()=>{
    //     axios({method: "post",
    //         url:fakeDataUrl2,
    //         data:{filter:0},
    //         withCredentials: true
    //     }).then(res=>{
    //         setCertificateList(res.data.data.certificateList)
    //     })
    // }, [])
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
                dataSource={certificateList}
                bordered={true}
                split = {false}
                style={{backgroundColor:"white"}}
                renderItem={(item,index) => (
                    <List.Item
                        actions={[<a key="pass" onClick={e=>passItem(e,index)}>通过</a>,
                            <a key="refuse" onClick={e=>refuseItem(e,index)}>拒绝</a>]}
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
                                description={`申请者: ${item[applicant]} 申请数量: ${item[applicationNum]} ${item[introduction]}`}
                            />
                        </Skeleton>
                        <div>{item[template]}</div>
                        <div>{numToState[item[auditState]]}</div>
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
export default CertificateList