
import React, { Component } from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import styles from './styles';

export default class Loader extends Component {
    render() {
        return (
            this.props.showLoader ?
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size="large" color="#5388FF" />
                </View>
                : null
        );
    }
}