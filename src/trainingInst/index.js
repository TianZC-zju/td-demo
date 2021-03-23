import React, {useReducer} from 'react'

import {BrowserRouter as Router, useParams} from "react-router-dom"
import { Layout} from "antd"
import MySiderMenu from "./MyMenu"
import MyBreadcrumb from "./MyBreadcrumb"
import MyRoute from "./MyRoute"
import Header from "../public/Header"
import Context from "./studentMange/MyContext"
const {  Content, Footer } = Layout;

const Index = ()=>{

    const store ={
        insId:localStorage.getItem('openId')
    }
    const reducer = (state, action)=>{
        switch (action.type) {
            case "setinsId":
                return {...state,insId:action.insId};
            default:
                throw  new Error();
        }
    }

    const [state, dispatch] = useReducer(reducer, store)
    return (
        <Router>
            <Header/>
            <Layout style={{ minHeight: '100vh' }}>
                <Context.Provider value={{state, dispatch}}>
                    <MySiderMenu/>

                    <Layout className="site-layout">
                        <Content style={{ margin: '0 16px' }}>
                                <MyBreadcrumb />
                                <MyRoute />
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </Context.Provider>
            </Layout>
        </Router>
    )
}

export default Index