import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { ActionCreators } from '../../../actions/index'
import Loader from '../../../components/CustomLoader/Loader'
import styles from './colorStyle'
import { ScrollView, View, FlatList, RefreshControl, Text, StatusBar } from 'react-native';
class Colors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: '',
            refreshing: false
        };
    }
    componentDidMount() {
        // console.log('this.props', this.props.actions)
        this.fetchColors()
    }

    fetchColors = () => {
        this.setState({
            isLoading: true,
        })
        this.props.actions.getColors().then(() => {
            if (this.props.flag) {
                this.setState({
                    isLoading: false,
                    data: this.props.data,
                })
            }
        })
    }
    renderColors = ({ item }) => {
        let color = item.color
        return (
            <View style={[styles.colorView, { backgroundColor: color }]} >
                <Text style={styles.txtStyle}>{item.name}</Text>
            </View >
        )
    }
    render() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={this.fetchColors}
                    />
                }
            >
                <StatusBar backgroundColor='#fff' barStyle='dark-content' />

                <Loader showLoader={this.state.isLoading} />
                {/* {console.log('this.state.data', this.state.data)} */}
                {
                    this.state.data !== '' ?
                        this.state.data.data ?
                            this.state.data.data.length > 0 ?
                                <FlatList
                                    data={this.state.data.data}
                                    renderItem={this.renderColors}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                                : null
                            : null
                        :
                        < View style={styles.noDataView}>
                            <Text style={styles.noDataText}  >
                                oops! ,Swipe Down to refreshing
                        </Text>
                        </View>
                }
                {/* <FlatList /> */}
            </ScrollView>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        flag: state.colorsReducer.getColorFlag,
        data: state.colorsReducer.getColorData
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Colors);