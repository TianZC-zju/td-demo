import {Image} from "antd"
import MyPDF from './pic/ce.pdf'
import Button from "antd/es/button"
import "./CertDetail.css"
import API from "../../config/apiUrl"
const CertDetail=() =>{
    const CAItem = JSON.parse(localStorage.getItem("CAItem"))
    console.log("CAItem",CAItem)
    const picUrl=CAItem.picSrc
    return(


    <div className="cert">
        <Image src={picUrl}>
            这是证书
        </Image>

            <Button onClick={()=>window.location.assign(API.CaApi.getCA+CAItem.chain_info)}>
                下载证书
            </Button>

    </div>

    )
}
export default CertDetail