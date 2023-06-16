import React from 'react';
import { StyleSheet, Image, SafeAreaView, View, TouchableOpacity, Text } from 'react-native';

function WagerPage({navigation}) {
    return (
        <SafeAreaView style={styles.wagerPage}>


            <View style={styles.footer}>
            <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate("Feed")}>
                <Image style={styles.footerIconImage} source={require('../assets/toppng.com-icon-menu-activity-feed-icon-1300x1300.png')}/>
                <Text style={styles.footerIconText}>
                    Feed
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate("Search")}>
                <Image style={styles.footerIconImage} source={require('../assets/clipart973837.png')}/>
                <Text style={styles.footerIconText}>
                    Search
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate("Wager")}>
                <Image style={styles.footerIconDollar} source={require('../assets/toppng.com-white-dollar-sign-861x1500.png')}/>
                <Text style={styles.footerIconText}>
                    Wager
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.footerIcon} onPress={() => navigation.navigate("Account")}>
                <Image style={styles.footerIconImage} source={require('../assets/pngaaa.com-4877784.png')}/>
                <Text style={styles.footerIconText}>
                    Profile
                </Text>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles= StyleSheet.create({
    wagerPage: {
        flex: 1,
        backgroundColor: '#000',
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

export default WagerPage;