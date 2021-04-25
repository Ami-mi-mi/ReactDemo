import React from 'react';
import { Form, Input, Row, Col } from 'antd';

import * as $api from './api';

import QueryPanel from '@CommComponents/queryPanel/queryPanel';
import TableComponent from '@CommComponents/TableComponent/TableComponent';



class UserManage extends React.Component {
    initialFormData = {
        loginName: '',
        name: '',
        telephone: '',
        agentId: '',
        email: ''
    }

    pageInfo = {
        page: 1,
        rows: 10
    }

    constructor(props) {
        super(props);

        this.state = {
            tableData: []
        }

        this.formRef = React.createRef();
    }

    componentDidMount() {
        this.queryTable();
    }

    queryTable = () => {
        const currentData = this.formRef.current.getFieldValue();

        const params = Object.assign({}, this.initialFormData, this.pageInfo, currentData);

        $api._queryUser(params).then(data => {
            this.setState({
                tableData: data.rows || []
            })
        });
    }

    clearForm = () => {
    
    }

    render() {
        const layout = {
            labelCol: { span: 8 }
        };
    
        const columns = [
            {
                title: '登录账号',
                width: 100,
                dataIndex: 'loginName'
            },
            {
                title: '姓名',
                width: 100,
                dataIndex: 'name'
            },
            {
                title: '坐席工号',
                width: 100,
                dataIndex: 'agentId'
            },
            {
                title: '部门名称',
                width: 100,
                dataIndex: 'departmentName'
            },
            {
                title: '角色',
                width: 100,
                dataIndex: 'jobName'
            },
            {
                title: '手机号码',
                width: 100,
                dataIndex: 'telphone'
            },
            {
                title: '邮箱',
                width: 100,
                dataIndex: 'email'
            },
            {
                title: '状态',
                width: 100,
                dataIndex: 'status'
            }
        ];

        return (
            <div className="inner-layout__main-content">
                <QueryPanel query={this.queryTable} clear={this.clearForm} isShowToggleBtn={true}>
                    <Form {...layout} name="userForm" ref={this.formRef}>
                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    label="登录账号"
                                    name="loginName"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
    
                            <Col span={8}>
                                <Form.Item
                                    label="姓名"
                                    name="name"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
    
                            <Col span={8}>
                                <Form.Item
                                    label="坐席工号"
                                    name="agentId"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
    
                            <Col span={8}>
                                <Form.Item
                                    label="手机号码"
                                    name="telphone"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
    
                            <Col span={8}>
                                <Form.Item
                                    label="邮箱"
                                    name="email"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                        </Row>   
                    </Form>
                </QueryPanel>
    
                <TableComponent columns={columns} data={this.state.tableData} type="checkBox"></TableComponent>
            </div>
        )
    }
}

export default UserManage;