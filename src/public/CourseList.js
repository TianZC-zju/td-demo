import {List, Skeleton} from "antd"
import {Link} from "react-router-dom"
import SuperIcon from "./iconfront"

const CourseList = (props)=>{
    return(
        <List
            className="demo-loadmore-list"
            // loading={initLoading}
            itemLayout="horizontal"
            //loadMore={loadMore}
            dataSource={props.dataList}
            bordered={false}
            split = {false}
            style={{backgroundColor:"white"}}
            renderItem={item => (
                <List.Item
                    actions={[<Link to={{pathname:"/ActivityDetail",state:{id:3} }}>查看详情</Link>]}
                    style={{
                        backgroundColor:"white",
                    }}
                >
                    <Skeleton avatar title={false} loading={item.loading} active >

                        <List.Item.Meta
                            avatar={
                                <SuperIcon className="book" type="icon-book" />
                            }
                            title={item.name}
                            description={`及格分数: ${item.pass_score} 分`}

                        />
                        {/*<div className="Time" >{item.teachers.map(it=>it.name+" ")}</div>*/}

                    </Skeleton>
                </List.Item>
            )}
        />
    )
}

export default CourseList