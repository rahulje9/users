import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from '../../../helpers/Responsive'
const styles = StyleSheet.create({
    container: {

        marginTop: responsiveHeight(40),
        elevation: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7b9fff',
        borderRadius: responsiveWidth(3),
        marginHorizontal: responsiveWidth(10),
        height: responsiveHeight(7)
    },
    logoutText: {
        fontSize: responsiveFontSize(2.5),
        color: '#fff'
    }
})

export default styles