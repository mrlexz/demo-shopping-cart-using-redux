import React, { useState } from 'react';
import { connect } from 'react-redux';
import {callAPI} from '../../services/callAPI';
import { register } from './../../actions/index'
import {Redirect} from 'react-router-dom';
import {
  Form,
  Input,
  Select,
  Checkbox,
  Button,
  InputNumber,
  notification
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css'; 
const { Option } = Select;
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = (props) => {
  const [form] = Form.useForm();
  const [isRegistered, setIsRegistered] = useState();

  const onFinish = values => {
    callAPI(values,'http://localhost:8000/myUser/', 'POST').then(resp => {
      if(resp.status === 201) {
        setIsRegistered(true);
        notification["success"]({
          message: 'Register success',
          description:
            'Register success!!!',
        });
        props.registerFunc();
      }
    }).catch(err => {
      notification["error"]({
        message: 'Register error',
        description:
          'Register error!!!',
      });
      setIsRegistered(false);
      console.log(err);
    })
  };

  if(isRegistered) {
    return <Redirect to="/login" />
  }

  return (
      <div className="login-custom">
    <Form
      {...formItemLayout}
      className="form-custom"
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{
        residence: ['zhejiang', 'hangzhou', 'xihu'],
        prefix: '86',
      }}
      scrollToFirstError
    >
         <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Fist name"
        name="first_name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Last name"
        name="last_name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item name="age" label="Age" rules={[{ type: 'number', min: 0, max: 99 },{required: true,}]}>
        <InputNumber />
      </Form.Item>

      <Form.Item label="Sex" name="gender"  rules={[{required: true}]}>
          <Select>
            <Select.Option value={1}>Male</Select.Option>
            <Select.Option value={2}>Female</Select.Option>
          </Select>
        </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject('The two passwords that you entered do not match!');
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject('Should accept agreement'),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
    </div> 
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
      registerFunc: () => {
          dispatch(register());
      }
  }
}

export default connect(null, mapDispatchToProps)(RegistrationForm);