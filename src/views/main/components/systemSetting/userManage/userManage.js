import React from 'react';
import { Form, Input, Row, Col} from 'antd';


import QueryPanel from '@CommComponents/queryPanel/queryPanel';

class userManage extends React.Component {
    render() {
        const layout = {
            labelCol: { span: 8 }
          };

        return (
            <div className="inner-layout__main-content">
                <QueryPanel query={this.query} clear={this.clear} isShowToggleBtn={true}>
                    <Form {...layout} name="basic">
                        <Row>
                            <Col span={8}>
                                <Form.Item
                                    label="登录账号"
                                    name="username"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="登录账号"
                                    name="username"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="登录账号"
                                    name="username"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="登录账号"
                                    name="username"
                                >
                                    <Input />
                                </Form.Item>
                            </Col>

                            <Col span={8}>
                                <Form.Item
                                    label="登录账号"
                                    name="username"
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