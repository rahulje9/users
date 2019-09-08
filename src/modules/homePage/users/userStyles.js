import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from '../../../helpers/Responsive'

const styles = StyleSheet.create({
    mainConainter: {
        flex: 1,
        backgroundColor: '#fff'
    },
    flexOne: { flex: 1 },
    colStyle: { flexDirection: 'row' },
    itemCard: {
        flex: 1,
        // borderWidth: 1,
        marginHorizontal: responsiveWidth(3),
        marginVertical: responsiveHeight(2.5),
        borderRadius: responsiveWidth(3),
        elevation: 1,
        paddingHorizontal: responsiveWidth(5),
        paddingVertical: responsiveHeight(2)
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: responsiveWidth(2)
    },
    nameStyle: {
        color: '#7b9fff',
        fontSize: responsiveFontSize(3.5)
    },
    emailStyle: {
        fontSize: responsiveFontSize(2.5)
    },
    noDataView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(40)
    },
    noDataText: {
        fontSize: responsiveFontSize(3),
        color: '#7b9fff'
    }
})

export default styles