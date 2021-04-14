import React from 'react';
import { Layout } from 'antd';
import './main.css';

const { Header, Footer, Sider, Content } = Layout;

class Main extends React.Component {
    render() {
        return (
            <Layout className="mainApp">
                <Header className="mainHeader">
                    <div className="mainHeaderTitle">React Demo</div>
                </Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        )
    }
}
export default Main;