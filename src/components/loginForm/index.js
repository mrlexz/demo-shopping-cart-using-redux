import React from 'react';
import {Redirect} from 'react-router-dom';
import {notification} from 'antd';
import 'antd/dist/antd.css'; 
import { login } from './../../actions/index';
import {callAPI} from '../../services/callAPI';
import { connect } from 'react-redux';
import { Form, Input, Button, Checkbox } from 'antd';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = (props) => {

  const [error, setError] = React.useState();
  const isLogin = localStorage.getItem("isLogin");

  const onFinish = values => {
      callAPI(values, 'http://localhost:8000/auth/token/', 'POST').then((resp) => {
        if(resp.status === 200) {
          props.loginAction(resp.data);
          notification["success"]({
            message: 'Login success',
            description:
              'Login success!!!',
          });
        } else {
          setError(true);
        }
    }).catch((error) => {
      setError(true);
    });
  };

 if(error) {
  notification["error"]({
    message: 'Login failed',
    description:
      'Login faled!!!',
  });
  setError();
}

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  if(isLogin==="true"){
    return <Redirect to="/" />
  }

  return (
    <div className="login-custom">

    <Form
      {...layout}
      name="basic"
      className="form-custom"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        {}
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
    </div>

  );
};

const mapStateToProps = (state) => {
  return {
      infor: state.login,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loginAction: (data) => {
          dispatch(login(data));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);