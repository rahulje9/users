import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import backButtonStyle from './styles'
class BackButton extends Component {
    constructor(props) {
        super(props);
        // this.state = {  };
    }
    render() {
        return (
            <TouchableOpacity
                activeOpacity={0.5}
                onPress={this.props.goBack}
                style={backButtonStyle.view}>
                <Image style={{
                    tintColor: this.props.buttonColor ?
                        this.props.buttonColor : '#7B9FFF'
                }} source={require('../../../assets/icons/back.png')} />
            </TouchableOpacity>
        );
    }
}

export default BackButton;