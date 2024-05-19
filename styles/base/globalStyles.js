import { StyleSheet } from 'react-native';

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
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },

    stdButton: {
        paddingVertical: 16,
        paddingHorizontal: 20,
        color: '#333',
        borderWidth: 2.5,
        borderColor: '#317BEF',
        backgroundColor: '#317BEF',
        borderRadius: 8,
        textDecorationLine: 'none',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',

        ':after': {
            content: '',
            position: 'absolute',
            bottom: 0,
            left: '50%',
            width: '0%',
            height: 2.3,
            backgroundColor: '#333',
            transitionProperty: 'width',
            transitionDuration: '0.4s',
            transitionTimingFunction: 'ease-in-out',
        },


        ':hover:after': {
            width: '110%',
        },
    },
});

export default globalStyles;