import React from 'react';
import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import FootBar from '../components/FootBar';

function SearchPage({navigation}) {

    const [text, onChangeText] = React.useState('');

    return (
        <SafeAreaView style={styles.searchPage}>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}>

            </TextInput>
            <FootBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    searchPage: {
        flex: 1,
        backgroundColor: '#000',
    },
    input: {
        backgroundColor: '#222',
        width: '85%',
        height: '5%',
        marginTop: 20,
        alignSelf: 'center',
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#888',
        color: 'white',
        paddingLeft: 10,
    },
    footer: {
        width: '100%',
        height: '10%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        position: 'absolute',
        bottom: 0,
        backgroundColor: '#000',
    },
    footerIcon: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    footerIconImage: {
        width: 30,
        height: 30,
    },
    footerIconDollar: {
        width: 18,
        height: 30,
    },
    footerIconText: {
        color: 'white',
        fontSize: 20,
        marginTop: 8,
    },
});

export default SearchPage;