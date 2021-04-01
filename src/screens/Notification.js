import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import NotificationBell from '../images/notificationBell.png'
import wine from '../images/wine.png'
import calendar from '../images/calendar.png'
import bag from '../images/bag.png'
import person from '../images/person.png'
class Notification extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                   <Text style={{fontSize:16, fontWeight:'bold'}}>Notifications</Text> 
                </View>
                <View style={styles.banner}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Please register</Text>                        
                        <Text style={styles.text2}>To get notified</Text>                        
                    </View>
                    <View style={styles.textView}>
                        <Image style={{height:80,width:79}} source={NotificationBell} />
                    </View>
                </View>
                <View style={styles.offer}>
                    <View style={styles.offer2}>
                    <Image style={{height:24,width:24,marginRight:10}} source={bag} />
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>New offers & sales from brands </Text>
                    </View>
                    <View style={styles.offer2}>
                    <Image style={{height:24,width:24,marginRight:10}} source={calendar} />
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>Upcoming events from malls</Text>
                    </View>
                    <View style={styles.offer2}>
                    <Image style={{height:24,width:24,marginRight:10}} source={wine} />
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>Hot deals from restaurants & cafes</Text>
                    </View>
                    <View style={styles.offer2}>
                    <Image style={{height:24,width:24,marginRight:10}} source={person} />
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>Discounts for entertainments</Text>
                    </View>
                </View>
                <View style={styles.btn}>
                    <TouchableOpacity style={styles.btn2}>
                        <Text style={{color:'white',fontSize:14}}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'white'
    },
    Header:{
        borderBottomWidth:1,
        borderColor: 'rgba(0,0,0,0.1)',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    banner:{
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomWidth:1,
        borderColor: 'rgba(0,0,0,0.1)',
    },
    textView:{
        paddingHorizontal:16,
        paddingVertical:20
    },
    text:{
        fontSize:24,
        fontWeight:'bold',
        paddingVertical:10
    },
    text2:{
        fontSize:12,
        color:'#5D6167',
        paddingVertical:5,
    },
    offer:{
        
        paddingVertical:90,
        
    },
    offer2:{
        flexDirection:'row',
        paddingHorizontal:16,
        paddingVertical:15
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
        paddingVertical:30
    },
    btn2:{
        backgroundColor:'#03A587',
        width:343,
        height:48,
        borderRadius:30,
        justifyContent: 'center',
        alignItems:'center'
    }
});

export default Notification