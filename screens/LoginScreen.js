import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';

function LoginScreen({navigation}) {
    return (
        <SafeAreaView style={styles.login}>
            <Image style={styles.loginImage} source={require('../assets/rebet-logo.png')}/>
            <Text style={styles.loginTitleText}>
                Welcome
            </Text>
            <Text style={styles.loginSubtitleText}>
                Enter your login credentials below.
            </Text>
            <TextInput style={styles.input}/>
            <TextInput style={styles.input}/>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Feed")} style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Sign Up")} style={styles.button}>
                    <Text>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    login: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    loginImage: {
        marginTop: 80,
    },
    loginTitleText: {
        color: '#fff',
        fontSize: 40,
        marginTop: 40,
    },
    loginSubtitleText: {
        color: '#f9f9f9',
        marginBottom: 30,
    },
    input: {
        backgroundColor: '#fff',
        width: '60%',
        height: 40,
        borderRadius: 30,
        marginTop: 20,
        paddingLeft: 10,
    },
    buttonsContainer: {
        flexDirection: "row",
        marginTop: 25,
    },
    button: {
        backgroundColor: '#f5f5f5',
        margin: 20,
        width: '20%',
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
});

export default LoginScreen;