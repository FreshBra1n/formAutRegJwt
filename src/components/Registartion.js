import React from 'react'
import { Form, Input, Button, Checkbox, Radio } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import axios from 'axios'


export default function Registartion() {
    const [login, setLogin] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [isAdmin, setIsAdmin] = React.useState(false)
    const [instagram, setInstagram] = React.useState('')
    const [telegram, setTelegram] = React.useState('')
    const [moduleId, setModuleId] = React.useState(0)

    const [key, setKey] = React.useState()


    async function submitData() {
        const response = await axios.post('https://typ-back.herokuapp.com/api/users/register', {
            login,
            password,
            firstName,
            lastName,
            isAdmin,
            instagram,
            telegram,
            moduleId
        })

        console.log(response);
        setKey(response.config.xsrfCookieName)

    }


    const changeLogin = (e) => {
        e.preventDefault()
        setLogin(e.target.value)
    }

    const changePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const changeFName = (e) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }

    const changeSName = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }

    const changeInstagram = (e) => {
        e.preventDefault()
        setInstagram(e.target.value)
    }

    const changeTelegram = (e) => {
        e.preventDefault()
        setTelegram(e.target.value)
    }
    const changeAdmin = () => {
        setIsAdmin(!isAdmin)
    }

    const changeRadio = (e) => {
        setModuleId(e.target.value)

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
                    label="Login"
                    className="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input value={login} onChange={e => changeLogin(e)} />
                </Form.Item>
                <Form.Item
                    label="First Name"
                    className="username"
                    rules={[{ required: true, message: 'Please input your First Name!' }]}
                >
                    <Input onChange={e => changeFName(e)} />
                </Form.Item>

                <Form.Item
                    label="Second Name"
                    className="username"
                    rules={[{ required: true, message: 'Please input your Second Name!' }]}
                >
                    <Input onChange={e => changeSName(e)} />
                </Form.Item>

                <Form.Item
                    label="instagram"
                    className="username"
                    rules={[{ required: true, message: 'Please input your Second Name!' }]}
                >
                    <Input onChange={e => changeInstagram(e)} />
                </Form.Item>

                <Form.Item
                    label="telegram"
                    className="username"
                    rules={[{ required: true, message: 'Please input your Second Name!' }]}
                >
                    <Input onChange={e => changeTelegram(e)} />
                </Form.Item>



                <Form.Item
                    label="Password"
                    className="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password value={password} onChange={e => changePassword(e)} />
                </Form.Item>


                <Form.Item className="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                    <Checkbox onClick={changeAdmin}>Admin</Checkbox>
                </Form.Item>

                <FormItem>
                    <Radio.Group onChange={e => changeRadio(e)}  >
                        <Radio value="1">1</Radio>
                        <Radio value="2">2</Radio>
                    </Radio.Group >
                </FormItem>


                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" onClick={() => submitData()} >
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div >
    )
}
