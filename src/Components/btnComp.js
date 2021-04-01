import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

class BtnComp extends Component {
  state = {
    
  };
  
  render() {

   
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{marginBottom:20,}}>
          {this.state.name.map((item, index) => (
            <TabView
              name={this.props.item}
              key={index}
              id={index}
              onPress={this.props.onPress}
            />
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  btnView: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginVertical: 5,
    height: 50,
  },
  btn: {
    borderWidth: 0.5,

    height: 40,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor:'#E6E8EB'
  },
});

export default BtnComp;
