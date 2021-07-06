import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, BankOutlined } from '@ant-design/icons';

const { Sider } = Layout;

export default class Header extends React.Component {
    render() {
        return (
            <Sider>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1">
                        <Link to="/">React Realty App</Link>
                    </Menu.Item>
                    <Menu.Item icon={<HomeOutlined />} key="2">
                        <Link to="/house/index">Houses</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BankOutlined />} key="3">
                        <Link to="/apartment/index">Apartments</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
        );
    }
};