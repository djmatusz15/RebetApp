import React from 'react';
import { View, StyleSheet, SafeAreaView, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import FootBar from '../components/FootBar';
import FeedCard from '../components/FeedCard';

function AccountPage({navigation}) {
    return (
        <SafeAreaView style={styles.account}>
            <View style={styles.header}>
                <Text style={styles.accountName}>
                    johndoe123
                </Text>
                <Image style={styles.settingsLogo} source={require('../assets/settings-white-outline-icon-download-png-11640258181jh2wl0wpyk.png')}/>
            </View>
            <View style={styles.accountCard}>
                <Image style={styles.accountImage} source={require('../assets/Palmy.png')}/>
                <View style={styles.accountInfo}>
                    <Text style={styles.accountInfoText}>Name: John Doe</Text>
                    <Text style={styles.accountInfoText}>Username: johndoe123</Text>
                    <Text style={styles.accountInfoText}>Password: ********</Text>
                    <TouchableOpacity style={styles.changePasswordButton}>
                        <Text style={styles.changePasswordText}>Change Password</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.balanceCard}>
                <Text style={styles.balanceText}>
                    Net Balance
                </Text>
                <Text style={styles.balanceText}>
                    $1000.00
                </Text>
                <View style={styles.tradeableBalanceView}>
                    <Text style={styles.tradeableBalanceText}>
                        Available Balance
                    </Text>
                    <Text style={styles.tradeableBalanceText}>
                        $1000.00 USD
                    </Text>
                </View>
                <View style={styles.transactionButtonsSection}>
                <TouchableOpacity style={styles.transactionButton}>
                    <Text style={styles.transactionButtonText}>Add Cash</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.transactionButton}>
                    <Text style={styles.transactionButtonText}>Withdraw</Text>
                </TouchableOpacity>
            </View>
            </View>
            <ScrollView style={styles.recentBets}>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
                <FeedCard/>
            </ScrollView>
            <FootBar/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    account: {
        flex: 1,
        backgroundColor: "#000",
        flexDirection: 'column',
    },
    header: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    accountScrollview: {
        height: '85%',
        width: '100%',
    },
    accountName: {
        color: 'white',
        fontSize: 26,
        fontWeight: '700',
    },
    accountCard: {
        flexDirection: 'row',
        height: '30%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    accountImage: {
        width: 150,
        height: 150,
        borderRadius: 25,
    },
    accountInfo: {
        flexDirection: 'column',
    },
    accountInfoText: {
        color: 'white',
        fontSize: 20,
    },
    settingsLogo: {
        width: 30,
        height: 30,
        position: 'absolute',
        right: 5,
    },
    changePasswordButton: {
        width: 150,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#222',
        borderWidth: 2,
        borderColor: '#666',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    changePasswordText: {
        color: '#fff',
    },
    balanceCard: {
        width: '87%',
        height: '28%',
        marginTop: -15,
        backgroundColor: '#222',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: "#888",
        alignSelf: 'center',
    },
    balanceText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 700,
        marginTop: 16,
        marginLeft: 20,
    },
    tradeableBalanceView: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    tradeableBalanceText: {
        margin: 20,
        color: '#999999',
        fontSize: 16,
    },
    transactionButtonsSection: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    transactionButton: {
        backgroundColor: '#444',
        marginHorizontal: 30,
        borderRadius: 15,
    },
    transactionButtonText: {
        color: '#f7f7f7',
        fontSize: 20,
        margin: 10,
        fontWeight: 500,
    },
    recentBets: {
        borderWidth: 2,
        borderColor: '#999',
        borderRadius: 16,
        width: '87%',
        alignSelf: 'center',
        marginTop: 20,
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

export default AccountPage;