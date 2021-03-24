import {useReducer} from "react";
import StringConst from "./StringConst";
const {typeList} = StringConst
const store ={
    [typeList.logo]:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2f7a5de2bb24de7ba7ef36275542d5f~tplv-k3u1fbpfcp-watermark.image",
    [typeList.name]:"天天培训",
    [typeList.introduction]:"专业的培训机构"
}
const Reducer = (state, action)=>{
    switch (action.type){
        case typeList.setlogo:
            return {...state, logo:action.value};
        case typeList.setname:
            return {...state, name:action.value};
        case typeList.setintroduction:
            return {...state, introduction:action.value};
        case typeList.setinsInfo:
            return {...state, ...action.value};
        default:
        {
            console.log(action)
            throw  new Error();
        }


    }
}

export  default () => useReducer(Reducer, store)
