import React from 'react';
import { StyleSheet, ScrollView, View, Image, Text } from 'react-native';

function CommentCard(props) {
    return (
        <View style={styles.commentCard}>
            <View style={styles.profile}>
                <Image style={styles.profileImage} source={require("../assets/Palmy.png")}/>
                <Text style={styles.profileText}>MrBeast9000</Text>
            </View>
            <Text style={styles.comment}>Dummy Text! Text for dummies</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    commentCard: {
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#444',
        justifyContent: 'flex-start',
        marginLeft: 5,
    },
    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 16,
    },
    profileText: {
        color: '#999',
        fontSize: 18,
        fontWeight: 300,
        marginLeft: 8,
    },
    comment: {
        color: 'white',
        fontSize: 12,
        marginTop: 10,
        marginLeft: 5,
        marginBottom: 15,
    },
});

export default CommentCard;