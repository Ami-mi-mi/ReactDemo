import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';

import MenuData from '../../../router/index';

const { SubMenu } = Menu;

class SiderBar extends React.Component {
    renderSubMenu = (item) => {
        return (
            <SubMenu key={item.key} title={item.title}>
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
            <Menu.Item key={item.path}>
                <Link to={item.path}>{item.title}</Link>
            </Menu.Item>
        );
    };

    render() {
        console.log(window.location)
        return (
            <div style={{ width: 200 }}>
                <Menu
                mode="inline"
                theme="dark"
                >
                    {MenuData && MenuData.map(item => item.children && item.children.length > 0 ? this.renderSubMenu(item) : this.renderMenuItem(item))}
                </Menu>
            </div>
        );
    }
}

export default SiderBar;