import React, { Component } from 'react';
import { Card, CardSection, Input, Button, Spinner } from './common';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class LoginForm extends Component {
    onEmailChange(text) {
       this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPressed() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password })
    }

    renderButton() {
        if(this.props.loading){
            return <Spinner size="large" />
        }

        return (
            <Button onPress={this.onButtonPressed.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="Password"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>

                {
                    this.props.error ?
                    <View style={{backgroundColor: 'white'}}>
                        <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                    </View> : null
                }

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

// const mapStateToProps =({auth})=> {const{email} = auth}
const mapStateToProps = state => {
    const { email, password, error, loading } = state.auth;
    return {
        email,
        password,
        error,
        loading
    };
};

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color : 'red'
    }
}

export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser }) (LoginForm);