import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout } from 'antd';
import './main.css';
import SiderBar from './components/siderBar/index';

import RoutesData from '@Router/routes';
import * as $Api from './api';

const { Header, Sider, Content } = Layout;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuData: []
        }
    }

    componentDidMount() { //组件完成第一次渲染，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
        const requestArr = [
            $Api._queryAuthorityTree(),
            $Api._getGlobalInfo()
        ];

        Promise.all(requestArr).then(([MenuTree, globalInfo]) => {
            this.setState({
                MenuData: MenuTree.rows
            });

            const {loginUser = {}, platformList = []} = globalInfo.rows;

            const platformUrlMap = {};
               
            platformList.forEach(platform => (platformUrlMap[platform.id] = platform.rootUrl));

            sessionStorage.setItem('SET_PLATFORM_URL_MAP', JSON.stringify(platformUrlMap))
            sessionStorage.setItem('SET_PLATFORM_URL_MAP', JSON.stringify(loginUser))
            
        });
        
    }


    renderRouteComponent = (RouteInfo) => {
        return RouteInfo.children && RouteInfo.children.length > 0 ? RouteInfo.children.map(item => this.renderRouteComponent(item)) : this.renderRouteInfo(RouteInfo);
    }

    renderRouteInfo = (menuRouteData) => {
        return (<Route path={menuRouteData.actionUrl} key={menuRouteData.id} component={RoutesData[menuRouteData.actionUrl]} exact></Route>);
    }

    render() {
        return (
            <Layout className="mainApp">
                <Header className="mainHeader">
                    <div className="mainHeaderTitle">React Demo</div>
                </Header>
                <Layout>
                    <Sider>
                        <SiderBar siderMenu={this.state.MenuData}/>
                    </Sider>
                    <Content>
                            <Switch>
                                {
                                    this.state.MenuData && this.state.MenuData.map(item => this.renderRouteComponent(item))
                                }
                            </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Main;