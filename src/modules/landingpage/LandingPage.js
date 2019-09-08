import React, { Component } from 'react';
import { ScrollView, KeyboardAvoidingView, View, Text, TouchableOpacity } from 'react-native';
import styles from './styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helpers/Responsive'

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    onSignup = () => {
        this.props.navigation.navigate('Registration')
    }

    onLogin = () => {
        this.props.navigation.navigate('Login')

    }
    render() {
        return (
            <ScrollView style={styles.flexOne}>
                <KeyboardAvoidingView style={styles.flexOne}
                    behavior='padding'
                    enabled
                >

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.registerBtn}
                        onPress={this.onSignup}
                    >
                        <Text style={styles.btnText}>
                            Register</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        activeOpacity={0.5}
                        style={styles.signInBtn}
                        onPress={this.onLogin}
                    >
                        <Text style={styles.signInBtnText}>
                            Login</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </ScrollView>
        );
    }
}

export default LandingPage;