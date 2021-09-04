import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import axios from 'axios';


export default function Autorisation() {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')

    async function handleSubmitData() {
        const response = await axios.post('https://typ-back.herokuapp.com/api/auth/login', {
            login: login,
            password, password
        })


        console.log(response);
        document.cookie = response.data.token
        console.log(document.cookie);
        localStorage.setItem('token', response.data.token)
        console.log(localStorage.getItem('token'));
    }

    const handleChangeLogin = (e) => {
        e.preventDefault()
        setLogin(e.target.value)
    }

    const handleChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }



    return (
        <div>
            <Form
                className="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                initialValues={{ remember: true }}

            >
                <Form.Item
                    label="Username"
                    className="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input onChange={e => handleChangeLogin(e)} />
                </Form.Item>

                <Form.Item
                    label="Password"
                    className="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password onChange={e => handleChangePassword(e)} />
                </Form.Item>

                <Form.Item className="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button onClick={handleSubmitData} type="primary" htmlType="submit" >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

