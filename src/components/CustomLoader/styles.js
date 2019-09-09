import { StyleSheet, Dimensions } from 'react-native';
import { Header } from 'react-navigation';
import { responsiveHeight, responsiveWidth } from '../../helpers/Responsive';

const styles = StyleSheet.create({
    loaderContainer: {
        flex: 1,
        position: 'absolute',
        backgroundColor: 'transparent',
        // width: Dimensions.get('window').width,
        // height: Dimensions.get('window').height,
        width: responsiveWidth(100),
        height: responsiveHeight(100),
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 999,
    }
});

export default styles;