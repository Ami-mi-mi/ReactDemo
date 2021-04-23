import React from 'react';
import { Form, Input, Row, Col} from 'antd';


import QueryPanel from '@CommComponents/queryPanel/queryPanel';

class userManage extends React.Component {
    queryTable = () => {

    }

    clearForm = () => {
        
    }
    
    render() {
        const layout = {
            labelCol: { span: 8 }
        };

        return (
            <div className="inner-layout__main-content">
                <QueryPanel query={this.queryTable} clear={this.clearForm} isShowToggleBtn={true}>
                    <Form {...layout} name="basic">
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
            </div>
        )
    }
}

export default userManage;