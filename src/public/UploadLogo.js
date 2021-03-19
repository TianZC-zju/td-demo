import {useState} from "react"
import {Upload} from "antd"

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
        const {fileList} = e
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
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
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

