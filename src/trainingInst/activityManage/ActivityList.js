import { List, Skeleton } from 'antd';
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import '../courseManage/CourseList.css'
import SuperIcon from "../../public/iconfront"
import API from "../../config/apiUrl"
import {useHistory} from "react-router"
import { useParams} from "react-router-dom"
import Context from "../studentMange/MyContext"


const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;
const dataUrl = `http://lyxkaka.e1.luyouxia.net:33880/trainingInst/course`


const ActivityList = (props)=>{
    const {state, dispatch} = useContext(Context)
    const {insApi} =API
    const history = useHistory()
    const [activityList, setActivityList] = useState([])
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
    return(
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
                    actions={[<a key="list-loadmore-edit" onClick={()=>gotoDetail(item.id)}>查看详情</a>]}
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
    )
}
export default ActivityList