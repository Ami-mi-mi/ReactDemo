import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';

const { SubMenu } = Menu;

class SiderBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            MenuData: []
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            MenuData: nextProps.siderMenu
        });
    }

    renderSubMenu = (item) => {
        return (
            <SubMenu key={item.id} title={item.name}>
                {
                    item.children.map(itemSon => {
                        return itemSon.children && itemSon.children.length > 0 ? this.renderSubMenu(itemSon) : this.renderMenuItem(itemSon);
                    })
                }
            </SubMenu>
            
        );
    }

    renderMenuItem = (item) => {
        return (
            <Menu.Item key={item.id}>
                <Link to={item.actionUrl}>{item.name}</Link>
            </Menu.Item>
        );
    };

    render() {
        return (
            <Menu
            mode="inline"
            theme="dark"
            className="mainSide"
            >
                {this.state.MenuData && this.state.MenuData.map(item => item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item))}
            </Menu>
        );
    }
}

export default SiderBar;