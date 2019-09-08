import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from '../../helpers/Responsive'

const backButtonStyle = StyleSheet.create({
    view: {
        width: responsiveWidth(8),
        marginLeft: responsiveWidth(2.5),
        marginTop: responsiveHeight(2),
        padding: responsiveWidth(1)
    }
})

export default backButtonStyle