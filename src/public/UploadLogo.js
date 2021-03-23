import {useState} from "react"
import {Upload} from "antd"
import axios from "axios"
import FormData from "form-data"

const UploadLogo =()=>{
    const [previewVisible, setpreviewVisible] = useState(false)
    const [previewImage, setpreviewImage] = useState('')
    const [previewTitle, setpreviewTitle] = useState('')
    const [fileList, setfileList] = useState([])
    const handleCancel =()=>setpreviewVisible(false)
    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        console.log("url")
        console.log(file.url)
        setpreviewVisible(true)
        setpreviewImage(file.url || file.preview)
        setpreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1))
    };
    const handleChange = (e) => {
        const {file, fileList} = e
        // let data = new FormData();
        // console.log(file.name)
        // data.append('file', file, file.name);
        // let config = {
        //     headers:{"Content-Type": `multipart/form-data; boundary=${data._boundary}`}
        // }
        // axios.post("https://imgkr.com/api/files/upload",data,config).then(res=>{
        //     console.log(res)
        // })
        setfileList(fileList)
    };

    function getBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }
    const uploadButton = (
        <div>
            <div style={{ marginTop: 8 }}>点击上传logo</div>
        </div>
    );
    return(
        <Upload
            action="https://imgkr.com/api/files/upload"
            listType="picture-card"
            fileList={fileList}
            onPreview={e=>handlePreview(e)}
            onChange={e=>handleChange(e)}
        >
            {fileList.length >= 1 ? null : uploadButton}
        </Upload>
    )
}
export default UploadLogo

