import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';

// import {SharedElement} from 'react-navigation-shared-element';

class Scroll extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {this.props.data.map((item, index) => (
            // <Pressable
            //   onPress={() =>
            //     this.props.navigation.navigate('detail', {item: item})
            //   }
            //   style={styles.list}
            //   key={index}>
              <View key={index}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('detailsMall')}>
                  <Image style={styles.listimg} source={{uri: item.image}} />
                </TouchableOpacity>
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: 'bold',
                    marginHorizontal: 16,
                    marginVertical: 10,
                  }}>
                  {item.name}
                </Text>
              </View>
            // </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flexDirection: 'row',
  },
  listimg: {
    height: 200,
    width: 300,
    borderRadius: 30,
    marginHorizontal: 16,
  },
});

export default Scroll;
