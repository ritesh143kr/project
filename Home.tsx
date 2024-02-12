import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, StatusBar, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions";
import Bookmarks from '../Bookmarks/Bookmarsk';

const Home = () => {

    const navigation = useNavigation();
    const [currentDate, setCurrentDate] = useState('');
    const[color1,setColor1]=useState('');
    useEffect(() => {
        var date = new Date().getDate(); //Current Date
        var month = new Date().getMonth() + 1; //Current Month
        var year = new Date().getFullYear(); //Current Year
        var hours = new Date().getHours(); //Current Hours
        var min = new Date().getMinutes(); //Current Minutes
        var sec = new Date().getSeconds(); //Current Seconds
        var nume =parseInt(hours);
        if(nume>=5 && nume<12)
        {
            setCurrentDate("Good Morning")
            setColor1('#FFA700');
        }
        else if (nume >=12 && nume <18) {
            setCurrentDate("Good Afternoon")
            setColor1('#FF6700');
        }
        else if(nume>=18)
        {
            setCurrentDate("Good Evening")
            setColor1('black');
        }
    }, []);


    return (
        <View>
            <View style={{ width: '100%', height: 80, backgroundColor: '#f2f2f2', borderBottomLeftRadius: 15, borderBottomRightRadius: 15, elevation: 10, flexDirection: 'row', flexWrap: 'wrap' }}>
                <Image
                    style={{ width: 50, height: 50, marginLeft: 15, marginTop: 15, borderRadius: 80 }}
                    source={{ uri: 'https://github.com/ritesh143kr/privacy-policy/assets/127919799/7855bdb5-74b6-4943-b7eb-c5fff1fdbf52' }}
                />
                <View style={{ flexDirection: 'row',flexWrap:'wrap' }}>
                <Text style={{ marginTop: 18, marginLeft: 20, fontSize: 17 }}>Hi Buddy!</Text>
                    <Image 
                    style={{width:30,height:30,marginTop:15,}}
                    source={{uri:"https://cdn-icons-png.flaticon.com/128/599/599335.png"}}/>
                </View>
                <Text style={{position:'absolute',marginTop:40,marginLeft:85,fontSize:16,color:color1,opacity:0.7}}>{currentDate}</Text>
            </View>
            <ScrollView>
                <Text style={{ marginTop: "6%", marginLeft: "5%", color: 'grey', fontSize: 25, marginBottom: "6%" }}>Top Features</Text>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginBottom: "15%", width: '100%', justifyContent: 'space-between' }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Course")}
                        style={{ backgroundColor: '#c44f56', width: '44%', marginLeft: '3%', borderRadius: 8, elevation: 10, shadowColor: 'orange' }}
                    >
                        <View>
                            <Text style={{ marginTop: 18, color: 'brown', elevation: 10, shadowColor: 'black', backgroundColor: 'white', marginLeft: 7.5, marginRight: 7.5, borderRadius: 8, height: 'auto', fontSize: 21, textAlign: 'center', paddingTop: '2.5%', paddingBottom: '2.5%' }}>Course</Text>
                            <Text style={{ marginTop: 15, marginLeft: 15, color: 'white', opacity: 1 }}>Stock Market basics</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'white', opacity: 1 }}>Technical Analysis</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'white', opacity: 1 }}>Future & Options</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'white', opacity: 1 }}>Mutual Funds</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'white', opacity: 1 }}>Commodity</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'white', opacity: 1 }}>Bonds & Many More..</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10, marginLeft: 10 }}>
                                <Text style={{ marginRight: 20, color: 'white', fontWeight: 'bold', opacity: 1 }}>View All</Text>
                                <AntDesign name='arrowright' size={25} color={'white'} opacity={1} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Calculator")}
                        style={{ backgroundColor: 'white', width: '45%', marginRight: '3%', borderRadius: 8, marginTop: 40, marginBottom: -30, elevation: 10, shadowColor: 'red' }}
                    >
                        <View>
                            <Text style={{ marginTop: 18, color: 'brown', elevation: 10, backgroundColor: '#e6e6e6', shadowColor: 'red', marginLeft: 7.5, marginRight: 7.5, borderRadius: 8, height: 'auto', fontSize: 21, textAlign: 'center', paddingTop: '2.5%', paddingBottom: '2.5%' }}>FinCalculator</Text>
                            <Text style={{ marginTop: 15, marginLeft: 15, color: 'purple' }}>Lumsum Calculator</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>SIP Calculator</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>FD Calculator</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>EMI Calculator</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>CAGR Calculator</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>And Many More..</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5, marginLeft: 10 }}>
                                <Text style={{ marginRight: 20, color: 'brown', fontWeight: 'bold', opacity: 1 }}>View All</Text>
                                <AntDesign name='arrowright' size={25} color={'brown'} opacity={1} />
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("FinGoal")}
                        style={{ backgroundColor: 'white', width: '44%', marginLeft: '3%', borderRadius: 8, marginTop: 30, elevation: 10, shadowColor: 'green', }}
                    >
                        <View>
                            <Text style={styles.card}>FinGoal</Text>
                            <Text style={{ marginTop: 15, marginLeft: 15, color: 'purple' }}>Lumsum Goal</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>SIP Goal</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>Inflation</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>Targeted EMI</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>NPS Goal</Text>
                            <Text style={{ marginTop: 4, marginLeft: 15, color: 'purple' }}>And Many More..</Text>
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 5, marginLeft: 10 }}>
                                <Text style={{ marginRight: 20, color: 'brown', fontWeight: 'bold', opacity: 1 }}>View All</Text>
                                <AntDesign name='arrowright' size={25} color={'brown'} opacity={1} />
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate("Take Notes")}
                        style={{ backgroundColor: 'white', width: '45%', marginRight: '3%', borderRadius: 8, marginTop: 65, marginBottom: -30, alignItems: 'center', elevation: 6, shadowColor: 'purple' }}
                    >
                        <View>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <Text></Text>
                            <AntDesign name='form' size={50} color={'#ff7722'} />
                            <Text style={{ fontWeight: 'bold', marginTop: 10, paddingLeft: '1%' }}>Takes Notes</Text>
                        </View>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        marginTop: 18,
        color: 'black',
        backgroundColor: '#e6e6e6',
        marginLeft: 7.5,
        marginRight: 7.5,
        borderRadius: 8,
        height: 'auto',
        fontSize: 21,
        textAlign: 'center',
        paddingTop: '2.5%',
        paddingBottom: '2.5%',
        elevation: 10,
        shadowColor: 'green',
    }
});

export default Home;