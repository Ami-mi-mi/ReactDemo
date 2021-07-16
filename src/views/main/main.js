import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Layout, Tag, Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import './main.css';
import SiderBar from './components/siderBar/index';

import RoutesData from '@Router/routes';
import * as $Api from './api';

import { authController } from '@Utils/authController';
import { filterMenu } from '@Js/permission';

const { Header, Sider, Content } = Layout;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            MenuData: [],
            loginUser: {}
        }
    }

    componentDidMount() { //组件完成第一次渲染，此时dom节点已经生成，可以在这里调用ajax请求，返回数据setState后组件会重新渲染
        const requestArr = [
            $Api._queryAuthorityTree(),
            $Api._getGlobalInfo()
        ];

        Promise.all(requestArr).then(([MenuTree, globalInfo]) => {
            const {loginUser = {}, platformList = []} = globalInfo.rows;

            this.setState({
                MenuData: filterMenu(MenuTree.rows),
                loginUser: loginUser
            });

            

            const platformUrlMap = {};
               
            platformList.forEach(platform => (platformUrlMap[platform.id] = platform.rootUrl));

            sessionStorage.setItem('SET_PLATFORM_URL_MAP', JSON.stringify(platformUrlMap))
            sessionStorage.setItem('SET_LOGIN_USER', JSON.stringify(loginUser))
            
        });
    }

    onClick = ({ key }) => {
        if(key === 'logout') {
            $Api._logout().then(() => {
                this.props.history.push('/login');
                authController.removeToken();
            });
        }
    };

    menu = () => {
        return (
            <Menu onClick={this.onClick}>
                <Menu.Item key="logout">登出</Menu.Item>
            </Menu>
        );
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

                    <div className="mainTagManageContainer">
                        <div className="mainTagListBox">
                           1213
                            
                        </div>
                    </div>

                    <div className="mainHeaderInfoBox">
                        <Tag className="mainHeaderInfoAgentId">
                            工号 - {this.state.loginUser.agentId}
                        </Tag>

                        <Dropdown overlay={this.menu}>
                        <a className="ant-dropdown-link" onClick={e => e.preventDefault()} href="#/">
                            {this.state.loginUser.name} <DownOutlined />
                        </a>
                        </Dropdown>
                    </div>
                </Header>
                <Layout>
                    <Sider>
                        <SiderBar siderMenu={this.state.MenuData}/>
                    </Sider>
                    <Content className="mainContent">
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