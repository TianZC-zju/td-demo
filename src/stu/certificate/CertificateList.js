import React, {useContext, useEffect, useState} from 'react'
import "../activityManage/HomePage.css"
import { Image  } from 'antd';
import {useHistory} from "react-router-dom"
import axios from "axios"
import API from "../../config/apiUrl"
import myContext from "../../trainingInst/studentMange/MyContext"


const HomePage =()=>{
    function onChange(a, b, c) {
        // console.log(a, b, c);
    }
    const [courseList, setCourseList]= useState([])
    const {state, dispatch}=useContext(myContext)
    const history = useHistory()
    const gotoDetail =(index)=>{

        localStorage.setItem("CAItem", JSON.stringify(courseList[index]))
        history.push({
            pathname:'/stu/certificate/detail',
        })
    }
    useEffect(()=>{
        axios.post(API.stuApi.getCAByStuId, {stuId:state.stuId}).then(res=>{
            console.log(res)
            setCourseList(res.data.activityList)
        })
    },[])
    return(
        <>

            <div className="Homepage">
                <div className="courseCards">
                    <div className="zjc">
                        {courseList.map((it, index) =>
                            <div className="card" onClick={()=>gotoDetail(index)}>
                                <Image
                                    src={it.picSrc}/>
                                <div className="content">
                                    <div className="activityName">{it.topic}</div>
                                    <div className="insName">{it.name}</div>
                                    <div className="description">{it.description}</div>
                                </div>
                            </div>)}


                    </div>

                </div>

            </div>
        </>

    )
}

export default HomePage