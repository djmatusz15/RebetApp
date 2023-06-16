import React from 'react';
import { StyleSheet, SafeAreaView, Text, TextInput, Image, View, TouchableOpacity } from 'react-native';

function SignUpScreen({navigation}) {

    const [name, onChangeName] = React.useState('');
    const [age, onChangeAge] = React.useState('');
    const [username, onChangeUsername] = React.useState('');
    const [password, onChangePassword] = React.useState('');
    const [location, onChangeLocation] = React.useState('');
    const [email, onChangeEmail] = React.useState('');


    return (
        <SafeAreaView style={styles.login}>
            <Image style={styles.loginImage} source={require('../assets/rebet-logo.png')}/>
            <Text style={styles.loginTitleText}>
                Welcome
            </Text>
            <Text style={styles.loginSubtitleText}>
                Enter your login credentials below.
            </Text>
            <TextInput style={styles.input} onChangeName={onChangeName} value={name} placeholder='Name'/>
            <TextInput style={styles.input} onChangeAge={onChangeAge} value={age} placeholder='Age'/>
            <TextInput style={styles.input} onChangeUsername={onChangeUsername} value={username} placeholder='Username'/>
            <TextInput style={styles.input} onChangePassword={onChangePassword} value={password} placeholder='Password'/>
            <TextInput style={styles.input} onChangeLocation={onChangeLocation} value={location} placeholder='Location'/>
            <TextInput style={styles.input} onChangeEmail={onChangeEmail} value={email} placeholder='Email'/>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity onPress={() => navigation.navigate("Feed")} style={styles.button}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate("Feed")} style={styles.button}>
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

export default SignUpScreen;