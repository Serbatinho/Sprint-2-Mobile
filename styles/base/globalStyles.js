import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const buttonWidth = width * 0.6;
const modalWidth = width * 0.8;

const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    stdButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    },

    stdButton: {
        paddingVertical: 11,
        paddingHorizontal: 150,
        marginVertical: 16,
        color: '#333',
        borderWidth: 2.5,
        borderColor: '#317BEF',
        backgroundColor: '#317BEF',
        borderRadius: 14,
        textDecorationLine: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: buttonWidth,
    },

    stdInput: {
        marginBottom: 18,
        width: width * 0.77,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 9,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },

    stdInputMarker: {
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#152E55',
        width: '100%',
        marginBottom: 7,
    },

    stdPageTitle: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: height * 0.07,
    },


    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 35,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: modalWidth,
    },

    stdFullView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: '#317BEF',
        width: width,
        height: height * 1,
    },

    stdViewContent: {
        padding: height * 0.05,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width,
        height: height * 0.85,
        maxHeight: height * 0.85,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.12,
        shadowRadius: 2,
    },

    stdViewMovel: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        height: height * 0.95,
        width: width * 0.9,
    },

    linkContainer: {
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    link: {
        color: '#000000',
    },

    linkBold: {
        color: '#152E55',
        fontWeight: 'bold',
    },

    successMessage: {
        fontSize: 18,
        color: 'green',
        marginBottom: 10,
    },

    errorMessage: {
        fontSize: 18,
        color: 'red',
        marginBottom: 10,
    },

});

export default globalStyles;
