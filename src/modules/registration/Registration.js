import React, { Component } from 'react';
import {
    View,
    Text,
    KeyboardAvoidingView,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StatusBar
} from 'react-native';
import { ActionCreators } from '../../actions/index'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import styles from './styles'
import Loader from '../../components/CustomLoader/Loader'
import BackButton from '../../components/BackButton/BackButton'
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            emailId: '',
            password: '',
            errors: '',
            isLoading: false,
            regErrors: ''
        };
    }

    onSignup = () => {
        this.setState({ regErrors: '' })
        const { emailId, password } = this.state
        if (this.isValid()) {
            let params = {
                'email': emailId,
                'password': password
            }
            this.setState({ isLoading: true })
            this.props.actions.doRegistration(params).then(() => {

                if (this.props.registrationFLag) {
                    this.setState({
                        isLoading: false,
                        regErrors: ''
                    })
                    this.props.navigation.navigate('App')
                }
                if (this.props.regErrorFlag) {
                    this.setState({
                        isLoading: false,
                        regErrors: 'Please try again later'
                    })
                }
            }
            )
        }
    }

    isValid = () => {
        const { emailId, password } = this.state
        let valid = true;
        let regexpSpace = /^\s*$/;
        var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        let errors = {}
        if ((emailId.trim() === '' || regexpSpace.test(emailId)) &&
            (password === '' || regexpSpace.test(password))) {
            valid = false
            errors.email = 'Email cannot be empty'
            errors.password = 'Password cannot be empty'
        } else {
            if (emailId.trim() === '' && regexpSpace.test(emailId)) {
                valid = false
                errors.email = 'Email cannot be empty'
            }
            if ((password === '' && regexpSpace.test(password))) {
                valid = false
                errors.password = 'Password cannot be empty'
            }
            if (!regex.test(emailId)) {
                valid = false
                errors.email = 'Please enter a valid email'
            }
        }
        this.setState({ errors: errors })
        return valid
    }

    goBackFunction = () => {
        this.props.navigation.goBack();
    }
    render() {
        return (
            <ScrollView style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                    style={styles.container}>
                    <Loader showLoader={this.state.isLoading} />
                    <BackButton
                        goBack={this.goBackFunction}
                    />
                    <View style={styles.container}>
                        <TextInput
                            placeholder='Email'
                            style={!this.state.errors.email ?
                                styles.emailFieldStyle : [styles.emailFieldStyle, styles.errorColor]}
                            onChangeText={(emailId) => this.setState({ emailId })}
                            onSubmitEditing={() => this.passwordField.focus()}
                            blurOnSubmit={false}
                        />
                        <Text style={styles.errorText}>{this.state.errors.email ? this.state.errors.email : null}</Text>
                        <TextInput
                            ref={(input) => { this.passwordField = input }}
                            placeholder='Password'
                            secureTextEntry
                            style={this.state.errors.password ? [styles.passwordField, styles.errorColor] : styles.passwordField}
                            onChangeText={(password) => { this.setState({ password }) }}
                            onSubmitEditing={this.onSignup}
                        />
                        {
                            this.state.errors.password ?
                                <Text style={styles.errorText}>{this.state.errors.password ? this.state.errors.password : null}</Text>
                                : null
                        }
                        {
                            this.state.regErrors ?
                                <Text style={styles.errorText}>{this.state.regErrors ? this.state.regErrors : null}</Text>
                                : null
                        }

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={this.onSignup}
                            style={(this.state.errors.email || this.state.errors.password) ? [styles.registerBtn, styles.errorBtnColor] : styles.registerBtn}>
                            <Text style={styles.btnText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        registrationFLag: state.RegReducer.regFlag,
        registrationData: state.RegReducer.registrationData,
        regErrorFlag: state.RegReducer.regError
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}
// mapDispatchToProps
// export default Registration;
export default connect(mapStateToProps, mapDispatchToProps)(Registration)