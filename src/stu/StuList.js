import { List, Avatar, Button, Skeleton } from 'antd';
import React from 'react'
import axios from 'axios';
import reqwest from 'reqwest';
import SuperIcon from "../public/iconfront"

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const fakeDataUrl2 = `https://www.fastmock.site/mock/76531f6c539f5dbd8b4fa43216bb135a/student/customer/activityManage`;

class LoadMoreList extends React.Component {
    state = {
        initLoading: true,
        loading: false,
        data: [],
        list: [],
    };

    componentDidMount() {
        this.getData();
    }

    getData = callback => {
        axios.post(fakeDataUrl2,{})
            .then(res=>{
                this.setState(res.data.data.activityList)
            })
    };

    onLoadMore = () => {
        this.setState({
            loading: true,
            list: this.state.data.concat([...new Array(count)].map(() => ({ loading: true, name: {} }))),
        });
        this.getData(res => {
            const data = this.state.data.concat(res.results);
            this.setState(
                {
                    data,
                    list: data,
                    loading: false,
                },
                () => {
                    // Resetting window's offsetTop so as to display react-virtualized demo underfloor.
                    // In real scene, you can using public method of react-virtualized:
                    // https://stackoverflow.com/questions/46700726/how-to-use-public-method-updateposition-of-react-virtualized
                    window.dispatchEvent(new Event('resize'));
                },
            );
        });
    };

    render() {
        const { initLoading, loading, list } = this.state;
        const loadMore =
            !initLoading && !loading ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginBottom:"10px",
                        height: 32,
                        lineHeight: '34px',
                        backgroundColor:"white",
                    }}
                >
                    <Button onClick={this.onLoadMore}>loading more</Button>
                </div>
            ) : null;

        return (
            <List
                className="demo-loadmore-list"
                loading={initLoading}
                itemLayout="horizontal"
                loadMore={loadMore}
                dataSource={list}
                bordered={true}
                split = {false}
                style={{backgroundColor:"white"}}
                renderItem={item => (
                    <List.Item
                        actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
                        style={{
                            backgroundColor:"white",
                        }}
                    >
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={
                                    <SuperIcon type="icon-huojian" />
                                }
                                title={<a href="https://ant.design">{item.name.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"

                            />
                            <div >content</div>
                        </Skeleton>
                    </List.Item>
                )}
            />
        );
    }
}

export default LoadMoreList