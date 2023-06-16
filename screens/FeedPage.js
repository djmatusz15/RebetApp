import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import FeedCard from '../components/FeedCard';
import FootBar from '../components/FootBar';
import ActiveChallengeCard from '../components/ActiveChallengeCard';
import PassiveChallengeCard from '../components/PassiveChallengeCard';

const FeedPage = () => {
    return (
        <SafeAreaView style={styles.feedContainer}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/rebet-logo.png')}/>
                <Image style={styles.sendLogo} source={require('../assets/1530315-200.png')}/>
            </View>
            <ScrollView contentContainerStyle={styles.feed}>
                <FeedCard/>
                <ActiveChallengeCard/>
                <PassiveChallengeCard/>
                <FeedCard/>
                <ActiveChallengeCard/>
                <PassiveChallengeCard/>
            </ScrollView>
            <FootBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    feedContainer: {
        flex: 1,
        backgroundColor: '#000',
    },
    feed: {
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',
        height: '6%',
        paddingBottom: 8,
    },
    logo: {
        width: 30,
        height: 35,
        margin: 20,
    },
    sendLogo: {
        width: 30,
        height: 35,
        position: 'absolute',
        right: 5,
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

export default FeedPage;