import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import search2 from '../images/search2.png';
import bigsearchicon from '../images/bigsearchicon.png'
class Search extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingVertical: 10,
          }}>
          <View style={styles.searchView}>
            <Image source={search2} />
            <TextInput placeholder="Search" placeholderTextColor="#5D6167" />
          </View>
          <View>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Text style={{color: '#03A587'}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bigsearch}>
            <Image source={bigsearchicon} />
            <Text style={{textAlign:'center', paddingVertical:30, color:'#5D6167', padding: 10,}}>Type to search by name of malls, brands, restaurants or entertainments in Riyadh </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  searchView: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    borderRadius: 20,
    width: 284,
    height: 40,
    backgroundColor: '#F5F6F7',
  },
  bigsearch:{
      justifyContent: 'center',
      alignItems:'center',
      flex:1,
      textAlign:'center'
  }
});

export default Search;
