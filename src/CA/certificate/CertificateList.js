import {List, message, Skeleton, Form} from 'antd'
import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"
import ActivityStateList from "../../public/ActivityStateList";
import StringConst from "../../public/StringConst";
import API from '../../config/apiUrl'
import axios from "axios";

const {typeList} = StringConst

const CertificateList = (props)=>{
    const numToState={
        0:"未审核",
        1:"已审核",
        2:"已拒绝"
    }
    const {activityName, applicant,applicationNum,template,auditState,introduction } = NameIndex

    const [certificateList, setCertificateList] = useState([])
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
        // let Info = [...certificateList]
        // Info[index][auditState]=1
        // setCertificateList(Info)
        axios.post(API.CaApi.passApplyCA,[{
            activityName:"区块链活动一",
            student:"pyd",
            "studentId":"1",
            "activityId":"1"
        }]).then(res=>{

        })
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
    useEffect(()=>{
        axios.get(API.CaApi.getAllActivityApplyCA).then(res=>{
            console.log(res.data)
            setCertificateList(res.data.activityList)
        })
    }, [])
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
                                title={item[typeList.topic]}
                                description={`申请者: ${item[typeList.insName]}  申请状态: ${ActivityStateList[item[typeList.state]]} `}
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
            <form name="formName" action={API.CaApi.verifyCA}  method="post" enctype ="multipart/form-data">
                <input type="file" name="file"></input>
                    <input type="text" name="seq"></input>
                        <input type="submit" value="提交"></input>
            </form>
        </>

    )
}
export default CertificateList