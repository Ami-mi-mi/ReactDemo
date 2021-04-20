import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import * as $Api from './api';

import './login.css';
class Login extends React.Component {
    render() {
        const layout = {
            wrapperCol: {
              span: 20,
            },
        };

        const onFinish = (values) => {
            const {loginName, password} = values;

            $Api.Login({loginName, password}).then(data => {

                const token = data.rows.token || '';
                localStorage.setItem('token', token);
                this.props.history.push('/option1');
            });
            
        };
        
        return (
            <div className="loginContainer">
                <div className="loginMain">
                    <div className="loginLeftPart">
                        <span className="loginLeftPartTitle">内控系统</span>
                        <strong className="loginLeftPartVersion">v1.1.1</strong>
                        <p className="loginLeftPartTagTxt">北京青牛技术股份有限公司</p>
                    </div>

                    <div className="loginRightPart">
                        <Form
                            className="loginRightPartForm"
                            {...layout}
                            onFinish={onFinish}
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            >
                            <Form.Item
                                name="loginName"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入账号!',
                                },
                                ]}
                            >
                                <Input placeholder="请输入账号"/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: '请输入密码!',
                                },
                                ]}
                            >
                                <Input.Password placeholder="请输入密码"/>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" block htmlType="submit">
                                    登录
                                </Button>
                            </Form.Item>

                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>记住密码</Checkbox>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login;