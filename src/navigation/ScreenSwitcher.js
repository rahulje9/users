import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, ActivityIndicator } from 'react-native';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions/index'
import AsyncStorage from '@react-native-community/async-storage'


class ScreenSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.checkLogin()
    }
    checkLogin = async () => {
        let isLoggedIn = await AsyncStorage.getItem('isLoggedIn')
        isLoggedIn ?
            this.props.navigation.navigate('App')
            :
            this.props.navigation.navigate('Auth')

    }
    render() {
        return (
            <View>
                <ActivityIndicator />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        // data: null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ScreenSwitcher);