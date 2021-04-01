import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import search from '../images/search.png';
import bannerimg from '../images/bannerimg.png';
import back from '../images/back.png';
import direction from '../images/direction.png';
import shareinfo from '../images/shareinfo.png';
// import {SharedElement} from 'react-navigation-shared-element';
class Detail extends Component {
  render() {
    // const {item} = this.props.route.params;
    // console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.headerback}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>India</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <Image source={search} />
          </TouchableOpacity>
        </View>

          
          <View style={styles.banner}>
          <Image style={{width: 343, height: 232, justifyContent:'center'}} source={require('../images/bannerimg.png')} />
          </View>
        <View style={styles.offerContainer}>
          <View style={styles.offerContainer2}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>
              Up to 70% Sale
            </Text>
            <Text style={{fontSize: 12, paddingVertical: 10, color: '#5D6167'}}>
              5 Jan - 30 Jan 2021F
            </Text>
            <Text style={{fontSize: 12, paddingVertical: 30}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </Text>
          </View>
        </View>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            borderBottomWidth:0.5,
            elevation: 1.5,
            ...styles.footer,
          }}>
          <TouchableOpacity style={styles.btn}>
            <Image source={direction} />
            <Text
              style={{paddingHorizontal: 10, fontSize: 14, fontWeight: 'bold'}}>
              Directions
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn}>
            <Image source={shareinfo} />
            <Text
              style={{paddingHorizontal: 10, fontSize: 14, fontWeight: 'bold'}}>
              Share info
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

// Detail.sharedElements = (navigation, otherNavigation, showing) => {
//   // Transition element `item.${item.id}.photo` when either
//   // showing or hiding this screen (coming from any route)
//   const item = navigation.getParam('item');
//   return [
//     {
//       id: `item.${item.id}.photo`,
//     },
//   ];
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    height: 60,
    alignItems: 'center',
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannertext: {
    paddingHorizontal: 33,
    paddingVertical: 20,
  },
  offerContainer2: {
    borderTopWidth: 0.5,
    paddingHorizontal: 16,
    padding: 30,
  },
  offerContainer: {
    paddingHorizontal: 16,
    paddingVertical:20
  },
  headerback: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
  },
  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    height:100,
    alignItems:'center',
    position: 'absolute', left: 0, right: 0, bottom: 0
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 131,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 50,
    borderWidth: 0.5,
    margin: 10,
    width: 168,
    height: 48,
    borderColor: '#03A587',
  },
});

export default Detail;
