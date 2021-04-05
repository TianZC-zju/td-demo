import {List, message, Skeleton, Form} from 'antd'
import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import { Upload, Button } from 'antd';
import NameIndex from "./NameIndex"
import Modal from "antd/es/modal"
import Mentions from "antd/es/mentions"
import ActivityStateList from "../../public/ActivityStateList";
import StringConst from "../../public/StringConst";
import API from '../../config/apiUrl'
import axios from "axios";
import generateAPIDoc from "../../config/generateAPIDoc";

const {typeList} = StringConst

const CertificateList = (props)=>{
    const numToState={
        0:"未审核",
        1:"已审核",
        2:"已拒绝"
    }

    // function downloadURI(uri, name)
    // {
    //     console.log(uri)
    //     var link = document.createElement("a");
    //     // If you don't know the name or want to use
    //     // the webserver default set name = ''
    //     link.setAttribute('download', name);
    //     link.href = uri;
    //     document.body.appendChild(link);
    //     link.click();
    //     link.remove();
    // }
    // function downloadURL(url) {
    //     var hiddenIFrameID = 'hiddenDownloader',
    //         iframe = document.getElementById(hiddenIFrameID);
    //     if (iframe === null) {
    //         iframe = document.createElement('iframe');
    //         iframe.id = hiddenIFrameID;
    //         iframe.style.display = 'none';
    //         document.body.appendChild(iframe);
    //     }
    //     iframe.src = url;
    // };


    const [certificateList, setCertificateList] = useState([])
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentIndex, setcurrentIndex] = useState(1)
    const [reject_reason,setreject_reason] = useState("")
    const [form] = Form.useForm();


    const changeActivityState=(state, activityId)=>{
        axios.post(API.CaApi.updateActivityStateByActivityId,{state, activityId}).then(res=>{
            if(res.data.updateSuccess){
                message.success("活动获取证书完成")
                newList()
            }else {
                message.error("获取失败")
            }
        })
    }
    const saveCA = (CAList, index)=>{
        axios.post(API.CaApi.saveCA,CAList).then(res=>{
            console.log(res)
            generateAPIDoc("saveCA",API.CaApi.saveCA, "post", CAList,res.data)
            if(res.data.insertSuccess){
                message.success("证书上链成功")
                changeActivityState(5, certificateList[index].id)
                newList()
            }

        })
    }

    const passItem=(e,index)=>{
        const AS = (certificateList[index].state).toString()
        if(AS  !== "4" && AS  !== "6" ){
            message.error(ActivityStateList[AS] + ", 不能申请证书")
            return
        }
        let erStu = {}
        for(let i = 0; i < certificateList[index].studentList.length; i++){
            const stuItem =  certificateList[index].studentList[i]
            if(stuItem.score < stuItem.pass_score){
                erStu[stuItem.student_id] = stuItem.studentName
            }
        }
        const postData = []
        for(let i = 0; i < certificateList[index].studentList.length; i++){
            const stuItem =  certificateList[index].studentList[i]
            if(erStu[stuItem.student_id] === undefined){
                postData.push({
                    activityName:certificateList[index].topic,
                    studentName: stuItem.studentName,
                    studentId:stuItem.student_id,
                    activityId:certificateList[index].id
                })
            }
        }
        console.log(postData)
        axios.post(API.CaApi.passApplyCA,postData).then(res=>{
            saveCA(res.data.data, index)
            generateAPIDoc("passApplyCA", API.CaApi.passApplyCA, "post", postData,res.data)
        })
        message.success("修改成功")
    }
    const refuseItem=(e,index)=>{
        const AS = (certificateList[index].state).toString()
        if(AS  !== "4" ){
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
            state:6,
            reject_reason,
            activityId:certificateList[currentIndex].id
        }).then(res=>{
            if(res.data.updateSuccess){
                message.success("修改成功")
                newList()
            }else{
                message.error("修改失败")
            }
        })

    }
    useEffect(()=>{
        newList()
    }, [])
    const newList =()=>{
        axios.get(API.CaApi.getAllActivityApplyCA).then(res=>{
            setCertificateList(res.data.activityList)
            generateAPIDoc("getAllActivityApplyCA",API.CaApi.getAllActivityApplyCA,"get", '', res.data)
        })
    }
    const uploadFile =()=>{
        let formData = new FormData();
        let imagefile = document.querySelector('#file');
        formData.append("file", imagefile.files[0]);
        axios.post('upload_file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res=>{
            console.log(res)
        })
    }

    const [uploading, setuploading] = useState(false)

    // const  funDownload =  (content, filename)=> {
    //     // 创建隐藏的可下载链接
    //     const eleLink = document.createElement('a')
    //     eleLink.download = filename;
    //     eleLink.style.display = 'none';
    //     // 字符内容转变成blob地址
    //     const blob = new Blob([content])
    //     eleLink.href = URL.createObjectURL(blob);
    //     // 触发点击
    //     document.body.appendChild(eleLink);
    //     eleLink.click();
    //     // 然后移除
    //     document.body.removeChild(eleLink);
    // };

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
                        <div>{ActivityStateList[item.state]}</div>

                    </List.Item>
                )}
            />
            <Modal title="请输入拒绝的原因:" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>

                <Mentions rows={3} placeholder="请在这输入" onChange={(e)=>changeRejectReason(e)}>

                </Mentions>

            </Modal>


            <Button onClick={()=>window.location.assign("http://3n7998852l.wicp.vip/certificate/download/eb4670f8-86ef-4e66-9fe1-53fccf436e7c")}>下载</Button>
        </>

    )
}
export default CertificateList
