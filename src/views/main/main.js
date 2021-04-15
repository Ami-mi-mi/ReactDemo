import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import { Layout } from 'antd';
import './main.css';
import SiderBar from './components/siderBar/index';

import Option1 from './components/option1';
import Option2 from './components/option2';

const { Header, Sider, Content } = Layout;

class Main extends React.Component {
    render() {
        return (
            <Layout className="mainApp">
                <Header className="mainHeader">
                    <div className="mainHeaderTitle">React Demo</div>
                </Header>
                <Layout>
                    <Sider>
                        <SiderBar/>
                    </Sider>
                    <Content>
                            <Switch>
                                <Route path="/option1" component={Option1} exact></Route>
                                <Route path="/option2" component={Option2} exact></Route>
                            </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Main;