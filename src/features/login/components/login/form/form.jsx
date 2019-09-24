import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import hashHistory from "_History";
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            password: '',
            remember: true
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleChecked = this.handleChecked.bind(this);

    }

    handleChangeInput(e){
        const{name,value}=e.target;
        console.log(name,value);
        this.setState({
            [name]:value
        })
    }
    handleChecked(e){
        const{name,checked}=e.target;
        console.log(name,checked);
        this.setState({
            [name]:checked
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log(this.state);
                console.log(hashHistory);
                console.log('Recibiendo valores del formulario: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} >
                <Form.Item>
                    {getFieldDecorator('user', {
                        rules: [{ required: true, message: 'Verifique su usuario!!' }],
                    })(
                        <Input name='user' onChange={this.handleChangeInput} size="large"
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Ingrese su usario"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Verifique su contraseña!!' }],
                    })(
                        <Input name='password' onChange={this.handleChangeInput} size="large"
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Ingrese su contraseña"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: this.state.remember
                    })(<Checkbox name="remember" onChange={this.handleChecked}>Recuérdame</Checkbox>)}
                    <a style={{float:'right'}} href="">
                    Se te olvidó tu contraseña
          </a>
                    <Button size="large" block type="primary" htmlType="submit" className="login-form-button">
                        Login
                    </Button>

                </Form.Item>
            </Form>
        );
    }
}

const WrappedLoginForm = Form.create({ name: 'login_form' })(LoginForm);
export default WrappedLoginForm
