import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../helpers/Responsive'
const styles = StyleSheet.create({
    flexOne: { flex: 1 },
    registerBtn: {
        backgroundColor: '#538AFF',
        height: responsiveHeight(8),
        marginHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(45),
        justifyContent: "center",
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: responsiveFontSize(2.5)
    },
    signInBtn: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#538AFF',
        height: responsiveHeight(8),
        marginHorizontal: responsiveWidth(10),
        borderRadius: responsiveWidth(3),
        marginTop: responsiveHeight(7),
        justifyContent: "center",
        alignItems: 'center'
    },
    signInBtnText: {
        color: '#538AFF',
        fontSize: responsiveFontSize(2.5)
    },
})

export default styles