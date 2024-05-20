import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');


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
        color: '#fff',
        textAlign: 'center',
        flexWrap: 'nowrap',
        Width: width * 0.9,
    },

    stdButton: {
        paddingVertical: 11,
        paddingHorizontal: 15,
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
        width: width * 0.8,
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
        width: width * 0.8,
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

    welcomeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginBottom: 40,
        marginLeft: 10,
        paddingHorizontal: 16,
        paddingVertical: 10,
        backgroundColor: 'transparent',
        borderRadius: 8,
        maxWidth: width * 0.8,
    },

    avatarPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    scrollViewContainer: {
        flex: 1,
        width: '100%',
        maxHeight: height * 0.6,
    },

    cardContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        width: '90%',
        alignSelf: 'center',
    },

    iconCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#317BEF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
    },

    cardTextContainer: {
        flex: 1,
    },

    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#317BEF',
    },

    cardDescription: {
        fontSize: 14,
        color: '#333333',
    },

});

export default globalStyles;
