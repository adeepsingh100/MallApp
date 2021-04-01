import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import back from '../images/back.png';
import search from '../images/search.png';
import direction from '../images/direction.png';
import shareinfo from '../images/shareinfo.png';
import ExploreScroll from '../Components/ExploreScroll'
class detailsMall extends Component {
  state = {
    name: [
      {
        MallName: 'Elante Mall',
        address:
          '178-178A, Purv Marg, Industrial Area Phase I, Chandigarh, 160002',
        country: 'India',
        distance: '2km',
        time: 'Hours:9AM - 12AM',
        stores: 215,
        image:
          'https://s3.india.com/wp-content/uploads/2019/08/Elante-Mall.jpg',
        id: '1',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={styles.headerback}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={back} />
            </TouchableOpacity>
            <Text style={{fontSize: 20}}>Back</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <Image source={search} />
          </TouchableOpacity>
        </View>
        <ScrollView>
        {this.state.name.map((item, index) => (
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              style={{marginBottom: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}>
                <Image
                  source={{uri: item.image}}
                  style={{height: 250, width: 350, borderRadius: 10}}
                />
                <Image
                  source={{uri: item.image}}
                  style={{
                    height: 250,
                    width: 350,
                    borderRadius: 10,
                    marginHorizontal: 10,
                  }}
                />
                <Image
                  source={{uri: item.image}}
                  style={{height: 250, width: 350, borderRadius: 10}}
                />
              </View>
            </ScrollView>
            <View style={{paddingHorizontal: 16, paddingVertical: 10}}>
              <Text
                style={{fontSize: 24, fontWeight: 'bold', paddingVertical: 10}}>
                {item.MallName}
              </Text>
              <Text style={{fontSize: 14, paddingVertical: 5}}>
                {item.address}
              </Text>
              <Text style={{fontSize: 14, paddingVertical: 5}}>
                {item.country}
              </Text>
              <Text style={{fontSize: 14, paddingVertical: 5}}>
                Distance: {item.distance}
              </Text>
              <Text style={{fontSize: 14, paddingVertical: 5}}>
                Timing: {item.time}
              </Text>
              <Text style={{fontSize: 14, paddingVertical: 5}}>
                {item.stores} Total Stores
              </Text>
            </View>
          </View>
        ))}
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 30,
            borderBottomWidth: 0.5,
            paddingHorizontal: 16,
            alignItems: 'center',
            justifyContent: 'center',
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
              Share Location
            </Text>
          </TouchableOpacity>
        </View>

          <View style={{paddingVertical:30}}>
            <ExploreScroll />
          </View>
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

export default detailsMall;
