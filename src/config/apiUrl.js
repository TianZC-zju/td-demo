const preUrl="http://127.0.0.1:7001/tm"
const farPre = "http://3n7998852l.wicp.vip"
// c
// onst farPre = "http://47.94.252.160:8080"
const stuApi={
    getStuInfoById  :preUrl+"/getStuInfoById/",//成功
    updateStuInfo:preUrl+"/updateStuInfo", //写好了
    getAllActivityByStuId:preUrl+"/getAllActivityByStuId/", //写好了
    getAllActiviyByState:preUrl+"/getAllActiviyByState", //写好了
    postActivityByid:preUrl+"/postActivityByid",
    getCAByStuId:preUrl+"/getCAByStuId", //写好了
    stuAddActivity:preUrl+"/stuAddActivity", //写好了
    isStuHasActivity:preUrl+"/isStuHasActivity", //写好了
    fakepostAllActivity:"https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage",

}
const CaApi={
    getAllActivityApplyStu:preUrl+"/ca/getAllActivityApplyStu", //写好了
    updateActivityStateByActivityId:preUrl+"/ca/updateActivityStateByActivityId", //写好了
    updateActivityRejectReasonByActivityId:preUrl+"/ca/updateActivityRejectReasonByActivityId", //写好了
    getAllActivityApplyCA:preUrl+"/ca/getAllActivityApplyCA",//写好了
    passApplyCA:farPre+"/certificate/apply", //写好了
    getCA:farPre+"/certificate/download/",
    verifyCA:farPre+"/certificate/verify/", //写好了
    saveCA:preUrl+"/ca/saveCA",//写好了
}
const insApi={
    getAllActivity:"http://j3820a6151.qicp.vip/business/activityManage",
    newActivity:preUrl+"/newActivity",//写好了
    getAllActivityByInsid:preUrl+"/getAllActivityByInsid/",//写好了
    getActivityByActivityId:preUrl+"/getActivityByActivityId", //写好了
    getAllTeacherAndActivityByInsId:preUrl+"/getAllTeacherAndActivityByInsId/",//写好了
    newACourse:preUrl+"/newACourse",//写好了
    getAllCourseListByInsId:preUrl+"/getAllCourseListByInsId/",//写好了
    getAllStudentByCourseId:preUrl+"/getAllStudentByCourseId/",//写好了
    getAllStudentByInsId:preUrl+"/getAllStudentByInsId/",// 写好了
    getInsInfoByInsId:preUrl+"/getInsInfoByInsId/", //写好了
    updateInsInfo:preUrl+"/updateInsInfo", //写好了
    updateScore:preUrl + "/updateScore", //写好了
    applyCAByInsId:preUrl + "/applyCAByInsId/", //写好了
}
const fakeLogin={
    postLogin:"https://www.fastmock.site/mock/295504c629aeca4cd4cc305983ec599f/login/Login"//写好了
}

export default {stuApi,CaApi, insApi, fakeLogin}
