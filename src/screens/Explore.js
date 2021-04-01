import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ExploreScroll from '../Components/ExploreScroll';

import Header from '../Components/Header';
import FilterBtn from '../Components/FilterBtn';

class Explore extends Component {
  state={
    isModal:false
  }
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
  
        <ExploreScroll />
        <FilterBtn isVisible={this.state.isModal} onPress={()=>this.setState({isModal:true})} requestClose={()=> this.setState({isModal:false})}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
    
  
  },
});

export default Explore;
