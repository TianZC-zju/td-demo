import { List, Skeleton } from 'antd';
import React, {useEffect, useState} from 'react'
// import axios from 'axios';
import SuperIcon from "../../public/iconfront"
import NameIndex from "./NameIndex"

// const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
// const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const CertificateList = (props)=>{
    const {activityName, applicant,applicationNum,template,auditState,introduction } = NameIndex
    const dataInit=[{
        [activityName]:"火箭制造",
        [applicant]:"李老师",
        [applicationNum]:45,
        [template]:"证书模板一",
        [auditState]:false,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
     {
        [activityName]:"火箭制造",
        [applicant]:"李老师",
        [applicationNum]:45,
        [template]:"证书模板一",
        [auditState]:false,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
     {
        [activityName]:"飞机制造",
        [applicant]:"田老师",
        [applicationNum]:45,
        [template]:"证书模板一",
        [auditState]:false,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
     {
        [activityName]:"汽车制造",
        [applicant]:"王老师",
        [applicationNum]:46,
        [template]:"证书模板一",
        [auditState]:false,
        [introduction]:"学生已经认真完成作业,考试, 给予通过",
    },
    ]
    const [certificateList, setCertificateList] = useState(dataInit)
    // useEffect(()=>{
    //     axios({method: "post",
    //         url:fakeDataUrl2,
    //         data:{filter:0},
    //         withCredentials: true
    //     }).then(res=>{
    //         setCertificateList(res.data.data.certificateList)
    //     })
    // }, [])
    return(
        <List
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            //loadMore={loadMore}
            dataSource={certificateList}
            bordered={true}
            split = {false}
            style={{backgroundColor:"white"}}
            renderItem={item => (
                <List.Item
                    actions={[<a key="list-loadmore-edit">通过</a>,<a key="list-loadmore-edit">拒绝</a>]}
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
                    <div>{item[auditState]===false?"未审核":"已经审核"}</div>
                </List.Item>
            )}
        />
    )
}
export default CertificateList