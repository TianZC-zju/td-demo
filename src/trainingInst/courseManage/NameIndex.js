
const store ={
    description:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强",
    name:"火箭材料",
    number:56,
    pass_score:60,
    teachers:[],
    start_time:"",
    end_time:"",
    ActivityList:[],
    selectTeacherList:[],
    selectActivityId:"2",
    value:[],
    dates:[],
    isModalVisible:false,
    teacherList:[],

}
const reducer = (state, action)=>{
    switch (action.type) {
        case "setdescription":
            return {...state,description:action.description};
        case "setname":
            return {...state,name:action.name};
        case "setnumber":
            return {...state,number:action.number};
        case "setpass_score":
            return {...state,pass_score:action.pass_score};
        case "setteachers":
            return {...state,teachers:action.teachers};
        case "setstart_time":
            return {...state,start_time:action.start_time};
        case "setend_time":
            return {...state,end_time:action.end_time};
        case "setActivityList":
            return {...state,ActivityList:action.ActivityList};
        case "setselectTeacherList":
            return {...state,selectTeacherList:action.selectTeacherList};
        case "setvalue":
            return {...state,value:action.value};
        case "sethackValue":
            return {...state,hackValue:action.hackValue};
        case "setdates":
            return {...state,dates:action.dates};
        case "setisModalVisible":
            return {...state,isModalVisible:action.isModalVisible};
        case "setteacherList":
            return {...state,teacherList:action.teacherList};
        case "setselectActivityId":
            return {...state,selectActivityId:action.selectActivityId};
        default:
        {
            console.log(action)
            throw  new Error();
        };



    }
}



export default  {store, reducer}