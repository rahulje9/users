import React, { Component } from 'react';
import { TouchableOpacity, Text, Alert, StatusBar } from 'react-native';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../../../actions/index'
import styles from './styles'

class Settings extends Component {
    constructor(props) {
        super(props);
        // this.state = {  };
    }

    logout = () => {
        Alert.alert(
            'LogOut',
            'Are you sure you want to logout?',
            [
                {
                    text: 'Logout',
                    onPress: () => {

                        this.props.actions.logOut()
                        this.props.navigation.navigate('Auth')
                    }
                },
                { text: 'cancel', style: 'cancel' }
            ]
        )
    }
    render() {
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={this.logout}>
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />

                <Text style={styles.logoutText}>Logout</Text>
            </TouchableOpacity>
        );
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
