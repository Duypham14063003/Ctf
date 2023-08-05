import React, { useState } from 'react';
import { Button, Form, Input, Divider } from 'antd';
import Style from './style';
import { Navigate } from 'react-router-dom';
import images from '../../assets/images';
import { signInWithGoogle } from '../../firebase';
interface LoginFormData {
  username: string;
  password: string;
}
const Login = () => {
  const [isLogin, SetIsLogin] = useState(false);
  const onFinish = (values: any) => {
    console.log('Success');
  };

  const onFinishFailed = (errorInfo: any) => {
    // console.log("Failed:", errorInfo);
  };

  return isLogin ? (
    <Navigate to="/" />
  ) : (
    <Style>
      <div className="container">
        <div className="container-logo">
          <img className="logo" src={images.logo} alt="" />
        </div>
        <h2 className="form-header">Login</h2>
        <Form
          layout="vertical"
          className="login-form"
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
            label={<span style={{ color: '#fff' }}>Username</span>}
            colon={false}
            required={false}
          >
            <Input className="input input-username" />
          </Form.Item>

          <Form.Item
            className="input"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
            label={<span style={{ color: '#fff' }}>Password</span>}
            colon={false}
            required={false}
          >
            <Input.Password className="input input-password" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button className="btn" type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
        <Divider
          orientation="center"
          plain
          style={{ borderColor: 'white', color: 'white' }}
        >
          Or
        </Divider>
        <div className="login-authentication">
          <Button className="btn" onClick={signInWithGoogle}>
            Google
          </Button>
          <Button className="btn" onClick={signInWithGoogle}>
            Github
          </Button>
        </div>
      </div>
    </Style>
  );
};

export default Login;
