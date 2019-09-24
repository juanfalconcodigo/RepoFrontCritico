import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import './login.scss'
const ButtonGroup = Button.Group;
const { Title } = Typography;
import imagen from './login.jpg';
import WrappedLoginForm from './form/form';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            remember: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChecked = this.handleChecked.bind(this);

    }
    handleChange(e) {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState({
            [name]: value
        })
    }
    handleChecked(e) {
        const { name, checked } = e.target;
        console.log(name, checked);
        this.setState({
            [name]: checked
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state);
        this.props.history.push('home')

    }
    render() {
        

        return (

            <>

                <section className='container-login'>
                    <div className='container-img'>
                        <img src="https://besthqwallpapers.com/Uploads/19-11-2017/29395/thumb2-4k-office-light-design-modern-apartment-cabinet.jpg" alt="Imagen de Login" />
                    </div>
                    <div className="container-form">
                        <div className="login">
                            <Title level={2} className="center">Iniciar sesión :</Title>
                            {/* <Form layout="vertical" onSubmit={this.handleSubmit}>
                                <Form.Item>
                                    <Input size="large"
                                        placeholder="Ingrese usuario"
                                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        name="user" onChange={this.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item>
                                    <Input.Password size="large" placeholder="Ingrese su contraseña"
                                        prefix={<Icon type="key" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        name="password" onChange={this.handleChange}
                                    />
                                </Form.Item>
                                <Form.Item >
                                    <Checkbox onChange={this.handleChecked} name="remember" checked={this.state.remember}>Recuérdame</Checkbox>
                                </Form.Item>
                                <Form.Item>
                                    <Button htmlType="submit" size="large" block type="primary">Ingresar</Button>
                                </Form.Item>



                            </Form> */}
                            <WrappedLoginForm/>
                            <div className="social">
                                <ButtonGroup >
                                    <Button type="primary" icon="facebook" size="large" />
                                    <Button type="primary" icon="twitter" size="large" />
                                    <Button type="primary" icon="google" size="large" />
                                </ButtonGroup>

                            </div>
                            <div className="center mt-2"><a href="">No esta registrado ? Regístrese</a></div>

                        </div>

                    </div>

                </section>
               {/*  <WrappedNormalLoginForm/> */}


            </>
        )
    }
}

export {
    Login
}