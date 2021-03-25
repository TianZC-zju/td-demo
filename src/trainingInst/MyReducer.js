import SC from './StringConst'
import {useReducer} from "react";

const {typeList} = SC
const store ={
    [typeList.insId]:localStorage.getItem('openId'),
    [typeList.isCourseEdit]:false,
    [typeList.courseInfo]:null,
}
const reducer = (state, action)=>{
    console.log("have dispatch: ", action)
    switch (action.type) {
        case typeList.setinsId:
            return {...state,[typeList.insId]:action.value};
        case typeList.setisCourseEdit:
            return {...state,[typeList.isCourseEdit]:action.value};
        case typeList.setcourseInfo:
            return {...state,[typeList.courseInfo]:action.value};
        default:
            throw  new Error();
    }
}
export default ()=>useReducer(reducer, store)