import React, {useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActiveChallengeCard = (props) => {

    const navigation = useNavigation();
    const [cards, setCards] = useState([
        { profile: 'LiamTass', team1: "New York Knicks", team1Odds: 200, team2: 'Toronto Raptors', team2Odds: -180, id: 2},
    ]);

    return (
        <View style={styles.card}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.profileTouch} onPress={() => navigation.navigate("User")}>
                    <Image style={styles.profilePic} source={require('../assets/Palmy.png')}/>
                    <Text style={styles.profileName}>MrBeast9000 is Challenging You!</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.teams}>
                <View style={styles.loserSingleTeam}>
                    <Image style={styles.teamLogo} source={require('../assets/new-england-patriots-logo-transparent.png')}/>
                    <Text style={styles.teamName}>
                        New England Patriots    -160
                    </Text>
                </View>
                <View style={styles.singleTeam}>
                    <Image style={styles.teamLogo} source={require('../assets/8521_las_vegas_raiders-primary-20201.png')}/>
                    <Text style={styles.teamName}> 
                        Las Vegas Raiders    +140
                    </Text>
                </View>
            </View>
            <View style={styles.interact}>
                <Text onPress={() => navigation.navigate("Comment")} style={styles.viewComments}>View all ___ comments</Text>
                <View style={styles.interactIcons}>
                    <View style={styles.interactLogos}>
                        <TouchableOpacity onPress={() => console.log('Like Button Pressed')}>
                            <Image style={styles.interactLogo} source={require('../assets/white-heart-transparent-background-24.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate("Comment")}>
                            <Image style={styles.interactLogo} source={require('../assets/kisspng-knight-frank-commercial-property-real-estate-resid-forside-ryttersson-5b86fec654be46.1594394215355737023471.png')}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => console.log('Rebet Button Pressed')}>
                            <Image style={styles.interactLogo} source={require('../assets/pngfind.com-carson-wentz-png-6439423.png')}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: '25%',
        // borderWidth: 2,
        // borderColor: '#999',
        backgroundColor: '#048140',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
    },
    header: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        marginLeft: 20,
        alignItems: 'center',
        marginTop: -8,
    },
    profileTouch: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    profileName: {
        fontSize: 20,
        color: "#000",
    },
    profilePic: {
        width: 25,
        height: 25,
        borderRadius: 15,
        marginRight: 10,
    },
    teams: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: 65,
    },
    singleTeam: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        backgroundColor: '#f4f4f4',
        borderRadius: 16,
        borderWidth: 4,
        borderColor: '#888',
        padding: 5,
        marginVertical: 5,
    },
    loserSingleTeam: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        borderRadius: 16,
    },
    teamLogo: {
        width: 25,
        height: 20,
    },
    teamName: {
        color: 'black',
        fontSize: 15,
        paddingVertical: 10,
        marginLeft: 20,
        
    },
    viewComments: {
        fontSize: 15,
        fontWeight: 400,
        color: 'black',
    },
    interact: {
        alignSelf: 'flex-start',
        marginLeft: 20,
        marginTop: 15,
    },
    interactLogos: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        marginTop: 12,
        alignSelf: 'flex-start',
        marginBottom: -20,
        marginLeft: 3,
    },
    interactLogo: {
        width: 18,
        height: 16,
        marginRight: 42,
    },
});

export default ActiveChallengeCard;