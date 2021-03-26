import SC from '../../public/StringConst'
import {useReducer} from "react";
const {typeList} = SC

const store = {
    [typeList.isModalVisible]:false,
    [typeList.courses]:[],
    [typeList.studentsAndScores]:[]
}

const reducer = (state, action)=>{
    switch (action.type){
        case typeList.setcourseList:
            return{...state,[typeList.courses]:action.value}
        case typeList.setstudentsAndScores:
            return{...state,[typeList.studentsAndScores]:action.value}
        case typeList.setisModalVisible:
            return{...state,[typeList.isModalVisible]:action.value}
        case typeList.updateStudentScore:
            return{...state,[typeList.studentsAndScores]: [...(state[typeList.studentsAndScores]),action.value]}
        default:
        {
            console.log(action)
            throw  new Error();
        }
    }
}


export default ()=> useReducer(reducer, store)
