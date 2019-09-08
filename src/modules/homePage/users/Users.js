import React, { Component } from 'react';
import { connect } from 'react-redux'
import { ActionCreators } from '../../../actions/index'
import { bindActionCreators } from 'redux'
import { View, ScrollView, Text, Image, RefreshControl, FlatList } from 'react-native';
import styles from './userStyles'
import Loader from '../../../components/CustomLoader/Loader'

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: '',
            refreshing: false
        };
    }
    componentDidMount() {
        this.fetchData()

    }
    fetchData = () => {
        this.setState({ isLoading: true })
        this.props.actions.getUsers().then(() => {
            if (!this.props.flag) {

                this.setState({
                    isLoading: false,
                    // refreshing: false,
                    data: this.props.data
                })
                console.log('data', this.props.data)
            }
        })
    }
    renderData = ({ item }) => {
        let image = item.avatar ? { uri: item.avatar } : require('../../../../assets/images/placeholder.png')
        return (
            < View style={[styles.itemCard, styles.colStyle]} >
                <View style={styles.flexOne}>
                    <Text style={styles.nameStyle}>{item.first_name + ' ' + item.last_name}</Text>
                    <Text style={styles.emailStyle}>{item.email}</Text>
                </View>
                <View>
                    <Image
                        style={styles.imageStyle}
                        source={image} />
                </View>
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
                        onRefresh={this.fetchData}
                    />
                }
                style={styles.mainConainter}>
                <Loader showLoader={this.state.isLoading} />
                {
                    this.state.data !== undefined ?
                        this.state.data.data ?
                            this.state.data.data.length > 0 ?
                                <FlatList

                                    data={this.state.data.data}
                                    renderItem={this.renderData}
                                    // showsVerticalScrollIndicator={false}
                                    keyExtractor={(item, index) => index.toString()}
                                />
                                : null
                            : null
                        :
                        <View style={styles.noDataView}>
                            <Text style={styles.noDataText} >
                                oops! ,Swipe Down to refreshing
                        </Text>
                        </View>
                }

            </ScrollView>
        );
    }
}

const mapStateToProps = (state) => {

    return {
        data: state.userReducer.userData,
        flag: state.userReducer.userDataError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(ActionCreators, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);