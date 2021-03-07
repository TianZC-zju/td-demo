import React, {useState} from 'react'
import "./HomePage.css"
import { Carousel,Image,Card  } from 'antd';


const HomePage =()=>{
    function onChange(a, b, c) {
        console.log(a, b, c);
    }
    const [courseList, setCourseList]= useState([
        {
            name:"数据挖掘",
            insName:"国防科技大学",
            picSrc:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e83c2517f81f4b50b0c47c3725014084~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"学习分析技术与方法",
            insName:"淮北师范大学",
            picSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81b2f73d05a642879898d08de00ac8d3~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"电工技术",
            insName:"厦门大学",
            picSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e697626b38de46e183e5984ec61d660a~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"医事法",
            insName:"北京大学",
            picSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79e3f3c611d040ae95febf8f3dadb626~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"数据挖掘",
            insName:"国防科技大学",
            picSrc:"https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e83c2517f81f4b50b0c47c3725014084~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"学习分析技术与方法",
            insName:"淮北师范大学",
            picSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/81b2f73d05a642879898d08de00ac8d3~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"电工技术",
            insName:"厦门大学",
            picSrc:"https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e697626b38de46e183e5984ec61d660a~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
        {
            name:"医事法",
            insName:"北京大学",
            picSrc:"https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/79e3f3c611d040ae95febf8f3dadb626~tplv-k3u1fbpfcp-watermark.image",
            description:"深入技术基础, 紧跟科学前沿"
        },
    ])

    return(
        <div className="Homepage">
            <Carousel afterChange={onChange} autoplay>
                <div className="myimg" >
                    <Image width={800} src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/34ee51eec2c04012ba73cb14669e7b2e~tplv-k3u1fbpfcp-watermark.image"></Image>
                </div>
                <div className="myimg">
                    <Image width={800}  src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/71799ed33644414b89ed2adae096422d~tplv-k3u1fbpfcp-watermark.image"></Image>
                </div>
                <div className="myimg">
                    <Image  width={800} src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b0c169aeaf046b68cffa71fe6671266~tplv-k3u1fbpfcp-watermark.image"></Image>
                </div>
                <div className="myimg">
                    <Image width={800}  src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b57f505e4b9e4ed59a266f614dc1f2b5~tplv-k3u1fbpfcp-watermark.image"></Image>
                </div>
            </Carousel>
            <div className="courseCards">
                <div className="zjc">
                    {courseList.map(it =>
                        <div className="card">
                            <Image
                                src={it.picSrc}></Image>
                            <div className="content">
                                <div className="activityName">{it.name}</div>
                                <div className="insName">{it.insName}</div>
                                <div className="description">{it.description}</div>
                            </div>

                        </div>)}


                </div>

            </div>

        </div>
    )
}

export default HomePage