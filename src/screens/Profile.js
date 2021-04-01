import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from "react-native";
import profileimg from '../images/profileimg.png'
import aero from '../images/aero.png'
class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.Header}>
                   <Text style={{fontSize:16, fontWeight:'bold'}}>Profile</Text> 
                </View>
                <View style={styles.banner}>
                    <View style={styles.textView}>
                        <Text style={styles.text}>Please register</Text>                        
                        <Text style={styles.text2}>To make the best use of this app</Text>                        
                    </View>
                    <View style={styles.textView}>
                        <Image style={{height:80,width:79}} source={profileimg} />
                    </View>
                </View>
                <View style={styles.offer}>
                    <View style={styles.offer2}>
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20,}}>New offers & sales from brands </Text>
                    <Image style={{marginRight:10,}} source={aero} />
                    </View>
                    <View style={styles.offer2}>
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>Upcoming events from malls</Text>
                    <Image style={{marginRight:10}} source={aero} />
                    </View>
                    <View style={styles.offer2}>
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>Hot deals from restaurants & cafes</Text>
                    <Image style={{marginRight:10}} source={aero} />
                    </View>
                    <View style={styles.offer2}>
                    <Text style={{fontSize:14,fontWeight:'bold', marginHorizontal:20}}>Discounts for entertainments</Text>
                    <Image style={{marginRight:10}} source={aero} />
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
        
        paddingVertical:70,
       
        
    },
    offer2:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
        paddingVertical:25,
        borderWidth:0.5,
        borderColor: 'rgba(0,0,0,0.1)',
        
    },
    btn:{
        justifyContent:'center',
        alignItems:'center',
      
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

export default ProfileScreen