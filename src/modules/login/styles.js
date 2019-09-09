import { StyleSheet, Platform } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helpers/Responsive'

const styles = StyleSheet.create({
    container: { flex: 1 },
    emailFieldStyle: {
        borderColor: '#538AFF',
        borderWidth: 1.5,
        marginHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(20),
        fontSize: responsiveFontSize(2.5),
        color: '#538AFF',
    },
    passwordField: {
        borderColor: '#538AFF',
        borderWidth: 1.5,
        marginHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(6),
        fontSize: responsiveFontSize(2.5),
        color: '#538AFF',
    },
    registerBtn: {
        backgroundColor: '#538AFF',
        height: responsiveHeight(8),
        marginHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(8),
        justifyContent: "center",
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: responsiveFontSize(2.5)
    },
    errorColor: {
        borderColor: 'red'
    },
    errorBtnColor: {
        backgroundColor: 'red'
    },
    errorText: {
        color: 'red',
        marginLeft: responsiveWidth(11),
        marginTop: responsiveHeight(2),
        fontSize: responsiveFontSize(1.8)
    }
})

export default styles