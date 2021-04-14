import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './login.css';
class Login extends React.Component {
    render() {
        const layout = {
            wrapperCol: {
              span: 20,
            },
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
                            name="basic"
                            initialValues={{
                                remember: true,
                            }}
                            >
                            <Form.Item
                                name="username"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                                ]}
                            >
                                <Input placeholder="账号"/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                                ]}
                            >
                                <Input.Password placeholder="密码"/>
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