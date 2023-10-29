import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    typhografy: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    textResult: {
        color: 'white',
        fontSize: 60,
        textAlign: 'right',
    },
    textResultOld: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 30,
        textAlign: 'right',
    },
    column: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
    },
});


export {
    styles,
};
