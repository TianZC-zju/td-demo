import NameIndex from "./NameIndex"
import {useState} from "react"
import {Button, DatePicker, Input, message} from "antd"
import "./NewActivity.css"
import UploadLogo from "../../public/UploadLogo"
import axios from "axios"
import API from "../../config/apiUrl"
import {useParams} from "react-router"
import generateAPIDoc from "../../config/generateAPIDoc";

const { RangePicker } = DatePicker;

const NewActivity=()=>{
    const {insId} = useParams()
    const {logo,name, introduction,detail, capacity, edu_institution, end_time, start_time} =NameIndex
    const dataInit ={
        [logo]:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c2f7a5de2bb24de7ba7ef36275542d5f~tplv-k3u1fbpfcp-watermark.image",
        [name]:"火箭制造",
        [introduction]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点",
        [detail]:"3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点，着重培养学生分析问题和解决问题的能力。3个月教你快速造火箭.  课程内容涵盖面广，工程实践性强，具有理论和实践紧密结合的特点，着重培养学生分析问题和解决问题的能力。"
    }
    const [dates, setDates] = useState([]);
    const [hackValue, setHackValue] = useState();
    const [value, setValue] = useState();
    const disabledDate = current => {
        if (!dates || dates.length === 0) {
            return false;
        }
        // const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        // const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return false;
    };

    const onOpenChange = open => {
        if (open) {
            setHackValue([]);
            setDates([]);
        } else {
            setHackValue(undefined);
        }
    };
    const [Information, setInformation]=useState(dataInit)
    const changeInput =(e,key)=>{
        setInformation(state=>({...state,[key]:e.target.value}))
    }
    const submitInf =()=>{
        const nameToMassage={
            [name]:"活动名称",
            [introduction]:"活动简介",
            [logo]:"logo",
            [detail]:"活动详情",
        }
        for(let key in Information){
            if(Information[key] === ''){
                message.error(`${nameToMassage[key]} 不能为空!`)
                return
            }
        }
        axios.post(API.insApi.newActivity,{
            [logo]:Information[logo],[name]:Information[name],[introduction]:Information[introduction],
            [start_time]:value[0].format("YYYY/MM/DD"),[end_time]:value[1].format("YYYY/MM/DD"),
            [detail]:Information[detail],[capacity]:Information[capacity],
            [edu_institution]:insId,
        }).then(res=>{
            generateAPIDoc("newActivity",API.insApi.newActivity, "post",{
                [logo]:Information[logo],[name]:Information[name],[introduction]:Information[introduction],
                [start_time]:value[0].format("YYYY/MM/DD"),[end_time]:value[1].format("YYYY/MM/DD"),
                [detail]:Information[detail],[capacity]:Information[capacity],
                [edu_institution]:insId,
            },res.data)
            console.log(res)
        })
        message.success("修改成功")
    }
    return(
        <div className="NewActivity">
            <div className="logo" >
                <UploadLogo/>
            </div>
            <div className="name">
                <label >活动名称: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[name]}
                    onChange={(e)=>changeInput(e,name)}
                />
            </div>
            <div className="datePick">
                <label >选择时间: </label>
                <RangePicker
                    value={hackValue || value}
                    disabledDate={disabledDate}
                    onCalendarChange={val => setDates(val)}
                    onChange={val => setValue(val)}
                    onOpenChange={onOpenChange}
                    style={{width:"200px"}}
                />
            </div>
            <div className="introduction">
                <label >活动简介: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[introduction]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>

            <div className="detail">
                <label >活动详情: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue={Information[detail]}
                    onChange={(e)=>changeInput(e,introduction)}
                />
            </div>
            <div className="detail">
                <label >最多人数: </label>
                <Input
                    style={{width:"200px"}}
                    defaultValue="0"
                    onChange={(e)=>changeInput(e,capacity)}
                />
            </div>



            <Button type="primary"  onClick={()=>submitInf()}>确定</Button>
        </div>
    )
}

export default NewActivity
