const preUrl="http://127.0.0.1:7001/tm"
const farPre = "http://3n7998852l.wicp.vip"
// c
// onst farPre = "http://47.94.252.160:8080"
const stuApi={
    getStuInfoById  :preUrl+"/getStuInfoById/",
    updateStuInfo:preUrl+"/updateStuInfo",
    getAllActivityByStuId:preUrl+"/getAllActivityByStuId/",
    postActivityByid:preUrl+"/postActivityByid",
    fakepostAllActivity:"https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage",

}
const CaApi={
    getAllActivityApplyStu:preUrl+"/ca/getAllActivityApplyStu",
    updateActivityStateByActivityId:preUrl+"/ca/updateActivityStateByActivityId",
    updateActivityRejectReasonByActivityId:preUrl+"/ca/updateActivityRejectReasonByActivityId",
    getAllActivityApplyCA:preUrl+"/ca/getAllActivityApplyCA",
    passApplyCA:farPre+"/certificate/apply",
    getCA:farPre+"/certificate/download/",
    verifyCA:farPre+"/certificate/verify/",
    saveCA:preUrl+"/ca/saveCA",
}
const insApi={
    getAllActivity:"http://j3820a6151.qicp.vip/business/activityManage",
    newActivity:preUrl+"/newActivity",
    getAllActivityByInsid:preUrl+"/getAllActivityByInsid/",
    getActivityByActivityId:preUrl+"/getActivityByActivityId",
    getAllTeacherAndActivityByInsId:preUrl+"/getAllTeacherAndActivityByInsId/",
    newACourse:preUrl+"/newACourse",
    getAllCourseListByInsId:preUrl+"/getAllCourseListByInsId/",
    getAllStudentByCourseId:preUrl+"/getAllStudentByCourseId/",
    getAllStudentByInsId:preUrl+"/getAllStudentByInsId/",
    getInsInfoByInsId:preUrl+"/getInsInfoByInsId/",
    updateInsInfo:preUrl+"/updateInsInfo",
    updateScore:preUrl + "/updateScore",
    applyCAByInsId:preUrl + "/applyCAByInsId/",
}
const fakeLogin={
    postLogin:"https://www.fastmock.site/mock/295504c629aeca4cd4cc305983ec599f/login/Login"
}

export default {stuApi,CaApi, insApi, fakeLogin}