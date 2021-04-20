import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import './main.css';
import SiderBar from './components/siderBar/index';

import MenuData from '@Router/index';

const { Header, Sider, Content } = Layout;

class Main extends React.Component {

    renderRouteComponent = (RouteInfo) => {
        return RouteInfo.children && RouteInfo.children.length > 0 ? RouteInfo.children.map(item => this.renderRouteComponent(item)) : this.renderRouteInfo(RouteInfo);
    }

    renderRouteInfo = (menuRouteData) => {
        return (<Route path={menuRouteData.path} key={menuRouteData.path} component={menuRouteData.component} exact></Route>);
    }

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
                                {
                                    MenuData && MenuData.map(item => this.renderRouteComponent(item))
                                }
                            </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Main;