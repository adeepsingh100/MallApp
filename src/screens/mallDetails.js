import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';
import back from '../images/back.png';
import search from '../images/search.png';
class mallDetails extends Component {
 
  render() {
    const data = this.props.route.params.item
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.headerback}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>{this.props.route.params.name}</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <Image source={search} />
          </TouchableOpacity>
        </View>
        <ScrollView>
          {data.map((item, index) => (
            <View style={styles.list} key={index}>
              <View style={styles.Flist} key={index}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('detailsMall')}>
                <Image
                  source={{uri: item.image}}
                  style={styles.img}
                />
                </TouchableOpacity >
              </View>
              <View style={styles.FlistData}>
                <View style={styles.FlistText}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', marginTop: 2, paddingHorizontal:20}}>
                    {item.name}
                  </Text>
                </View>
               
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerback: {
    flexDirection: 'row',
    justifyContent: 'center',
    height: 60,
    alignItems: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    height: 60,
    alignItems: 'center',
  },
  Flist: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 228,
    width: 343,
    borderRadius: 20,
  },
  FlistData: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 20,
    justifyContent: 'space-between',
  },
});

export default mallDetails;
