import SC from "./StringConst"
import {useReducer} from "react";
const {typeList} = SC

const store={
    [typeList.topic]:"火箭制造",
    [typeList.capacity]:45,
    [typeList.start_time]:"2021-1-3",
    [typeList.end_time]:"2021-1-4",
    [typeList.description]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点",
    [typeList.detail]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点，着重培养学生分析问题和解决问题的能力。3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点，着重培养学生分析问题和解决问题的能力。",
    [typeList.seal]:"https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/506dc0e5a0454ba68c99f8cd96ad0ecd~tplv-k3u1fbpfcp-watermark.image",
    [typeList.courseList]:[],
    [typeList.insInfo]:{}
}
const reducer=(state, action)=>{
    switch (action.type){
        case typeList.settopic:
            return {...state, [typeList.topic]:action.value}
        case typeList.setcapacity:
            return {...state, [typeList.capacity]:action.value}
        case typeList.setstart_time:
            return {...state, [typeList.start_time]:action.value}
        case typeList.setend_time:
            return {...state, [typeList.end_time]:action.value}
        case typeList.setdescription:
            return {...state, [typeList.description]:action.value}
        case typeList.setdetail:
            return {...state, [typeList.detail]:action.value}
        case typeList.setseal:
            return {...state, [typeList.seal]:action.value}
        case typeList.setcourseList:
            return {...state, [typeList.courseList]:action.value}
        case typeList.setinsInfo:
            return {...state, [typeList.insInfo]:action.value}
        case typeList.setactivityInfo:
            return {...state, ...(action.value)}
        default:
        {
            console.log(action)
            throw new Error()
        }
    }
}

export default ()=>useReducer(reducer, store)