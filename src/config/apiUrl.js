const preUrl="http://127.0.0.1:7001/tm"
const stuApi={
    getStuInfoById  :preUrl+"/getStuInfoById/",
    updateStuInfo:preUrl+"/updateStuInfo",
    getAllActivityByStuId:preUrl+"/getAllActivityByStuId/",
    postActivityByid:preUrl+"/postActivityByid",
    fakepostAllActivity:"https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage",

}
const CaApi={
    postAllActivity:"http://3d6991g746.goho.co/certificate/activity"
}
const insApi={
    getAllActivity:"http://j3820a6151.qicp.vip/business/activityManage",
    newActivity:preUrl+"/newActivity",
    getAllActivityByInsid:preUrl+"/getAllActivityByInsid/",
    getActivityByActivityId:preUrl+"/getActivityByActivityId",
    getAllTeacherAndActivityByInsId:preUrl+"/getAllTeacherAndActivityByInsId/",
    newACourse:preUrl+"/newACourse",
    getAllCourseListByInsId:preUrl+"/getAllCourseListByInsId/",
    getAllStudentByInsId:preUrl+"/getAllStudentByInsId/",
    getInsInfoByInsId:preUrl+"/getInsInfoByInsId/",
    updateInsInfo:preUrl+"/updateInsInfo",

}
const fakeLogin={
    postLogin:"https://www.fastmock.site/mock/295504c629aeca4cd4cc305983ec599f/login/Login"
}

export default {stuApi,CaApi, insApi, fakeLogin}