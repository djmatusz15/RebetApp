import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function UserProfile(props) {

    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.userProfile}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack(null)}>
                    <Image style={styles.backArrow} source={require('../assets/kindpng_782155.png')}/>
                </TouchableOpacity>
                <Text style={styles.userName}>
                    MrBeast9000
                </Text>
                <Image style={styles.dmArrow} source={require('../assets/1530315-200.png')}/>
            </View>
            <View style={styles.userProfileCard}>
                <Image style={styles.userProfilePic} source={require('../assets/Palmy.png')}/>
                <View style={styles.userFriendSect}>
                    <View style={styles.followSect}>
                        <Text style={styles.followText}>142 followers</Text>
                        <Text style={styles.followText}>200 following</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bioAndStats}>
                <Text style={styles.bioText}>
                    "Best there has been, best there ever will be."
                </Text>
                <View style={styles.stats}>
                    <View style={styles.statTab}>
                        <Text style={styles.statMain}>78</Text>
                        <Text style={styles.statSub}>Wins</Text>
                    </View>
                    <View style={styles.statTab}>
                        <Text style={styles.statMain}>$1430.28</Text>
                        <Text style={styles.statSub}>Earned</Text>
                    </View>
                    <View style={styles.statTab}>
                        <Text style={styles.statMain}>538</Text>
                        <Text style={styles.statSub}>Aff.</Text>
                    </View>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.userInfo}>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    userProfile: {
        flex: 1,
        backgroundColor: '#000',
    },
    header: {
        width: '100%',
        heigth: '10%',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    backArrow: {
        width: 20,
        height: 25,
        marginLeft: 8,
    },
    userName: {
        color: 'white',
        fontSize: 18,
        fontWeight: 800,
        marginLeft: 30,
    },
    dmArrow: {
        width: 60,
        height: 45,
    },
    userProfileCard: {
        width: '100%',
        height: '23%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },
    userProfilePic: {
        width: 120,
        height: 120,
    },
    userFriendSect: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    followSect: {
        flexDirection: 'column',
        alignItems: 'center',
        padding: 12,
    },
    followText: {
        color: '#f8f8f8',
        fontSize: 20,
        marginVertical: 7,
    },
    bioAndStats: {
        width: '87%',
        height: '22%',
        backgroundColor: '#222',
        borderWidth: 2,
        borderColor: '#777',
        alignSelf: 'center',
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bioText: {
        color: '#f5f5f5',
        fontSize: 16,
    },
    stats: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 20,
    },
    statTab: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    statMain: {
        color: 'white',
        fontSize: 25,
        fontWeight: 800,
    },
    statSub: {
        color: 'white',
        marginTop: 5,
    },
    userInfo: {
        borderWidth: 2,
        borderColor: '#444',
        width: '87%',
        height: '70%',
        alignSelf: 'center',
        marginTop: 8,
        borderRadius: 16,
    },
});

export default UserProfile;