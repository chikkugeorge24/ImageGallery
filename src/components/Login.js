import React from 'react';
import { withRouter } from 'react-router-dom';
import { Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, GiftOutlined } from '@ant-design/icons';

/** Login Page - Entry point to the Gallery */
const Login = (props) => {
      const cardStyle = {
            width: "295px",
            height: "307px",
            borderRadius: "16px",
            margin: "auto",
            backgroundColor: "#5555",
            boxShadow: "5px 8px 24px 5px rgba(208, 216, 243, 0.6)",
            fontVariant: "petite-caps",
            top: "100px",
            position: "relative"
      }
      const showDashboard = () => {
            props.history.push('/dashboard');
      }
      return (
            <div className="container-fluid h-100">
                  <div className="row h-100 justify-content-center align-items-center">
                        <div className="col-12">
                              <Card
                                    className="h-100 w-100"
                                    bordered={true}
                                    title="Login To Gallery"
                                    style={cardStyle}>
                                    <Form onFinish={showDashboard}>
                                          <div className="d-flex">
                                                <Form.Item name="name" rules={[{ required: true }]}>
                                                      <Input
                                                            placeholder="Name"
                                                            prefix={<UserOutlined />} />
                                                </Form.Item>
                                          </div>
                                          <div className="d-flex">
                                                <Form.Item name="password" rules={[{ required: true }]}>
                                                      <Input.Password
                                                            placeholder="Password"
                                                            prefix={<LockOutlined />} />
                                                </Form.Item>
                                          </div>
                                          <div className="d-flex">
                                                <Button
                                                      type="primary"
                                                      icon={<GiftOutlined />}
                                                      htmlType="submit"
                                                      style={{ width: "-webkit-fill-available" }}> Open Your Gallery
                                                </Button>
                                          </div>
                                    </Form>
                              </Card>
                        </div>

                  </div>

            </div>
      );
};
export default withRouter(Login);