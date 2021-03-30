import {List, message, Skeleton} from 'antd'
import React, {useContext, useEffect, useState} from 'react'
import axios from 'axios';
import './ActivityList.css'
import SuperIcon from "../../public/iconfront"
import {useHistory} from "react-router"
import API from "../../config/apiUrl"
import ActivityStateList from "../ActivityStateList"
import myContext from "../../trainingInst/studentMange/MyContext"
import SC from "../../public/StringConst"
const {typeList} = SC

const ActivityList = (props)=>{
    const history = useHistory()
    const [activityList, setActivityList] = useState([])
    const {state, dispatch}=useContext(myContext)
    const activityPost = {
        insId:null,
        stuId:state.stuId,
        activityId:null,
        isAttend:false,
    }
    localStorage.setItem("activityPost", JSON.stringify(activityPost))

    useEffect(()=>{
        axios.get(API.stuApi.getAllActivityByStuId+state.stuId).then(res =>{
            console.log(res)
            setActivityList(res.data.activityList)
        })
    }, [])

    const gotoDetail =(id)=>{
        activityPost.activityId = id
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
                    actions={[<a onClick={()=>gotoDetail(item.id)}>查看详情</a>]}
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
                                description={item.courses.map((it)=>`${it.name}: ${it.pass_score}分   `)}

                            />
                        <div className="Time" >{item.start_time.toString().split("T")[0] +` - `+item.end_time.toString().split("T")[0]}</div>
                        <div className="certificateState">{ActivityStateList[item[typeList.state]]}</div>
                    </Skeleton>
                </List.Item>
            )}
        />
    )
}
export default ActivityList