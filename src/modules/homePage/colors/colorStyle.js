import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveWidth, responsiveHeight } from '../../../helpers/Responsive'
const styles = StyleSheet.create({
    noDataView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(40)
    },
    noDataText: {
        fontSize: responsiveFontSize(3),
        color: '#538AFF'
    },
    colorView: {
        marginHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(2.5),
        borderRadius: responsiveWidth(3),
        elevation: 1,
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(2)

    },
    txtStyle: {
        fontSize: responsiveFontSize(3)
    }
})

export default styles