import React from 'react';
import { StyleSheet, View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import CommentCard from '../components/CommentCard';
import { useNavigation } from '@react-navigation/native';

function CommentScreen(props) {

    const navigation = useNavigation();
    const [text, onChangeText] = React.useState('');

    return (
        <SafeAreaView style={styles.commentPage}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}>
                    <Image style={styles.backArrow} source={require('../assets/kindpng_782155.png')}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>Comments</Text>
            </View>
            <ScrollView>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
                <CommentCard/>
            </ScrollView>
            <TextInput style={styles.input} onChangeText={onChangeText} value={text}>

            </TextInput>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    commentPage: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 800,
    },
    backArrow: {
        width: 15,
        height: 25,
        alignSelf: 'flex-start',
        marginLeft: -150,
    },
    input: {
        backgroundColor: '#222',
        width: '85%',
        height: '5%',
        alignSelf: 'center',
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#888',
        color: 'white',
        paddingLeft: 10,
    },
});

export default CommentScreen;