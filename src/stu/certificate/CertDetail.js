import {Image} from "antd"
import MyPDF from './pic/ce.pdf'
import Button from "antd/es/button"
import "./CertDetail.css"
const CertDetail=() =>{
    const picUrl="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42db7cc96cfb4e33960cc4a24347e7a5~tplv-k3u1fbpfcp-watermark.image"
    return(


    <div className="cert">
        <Image src={picUrl}>
            这是证书
        </Image>
        <a href={MyPDF} download>
            <Button>
                下载证书
            </Button>
        </a>
    </div>

    )
}
export default CertDetail