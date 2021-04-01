import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import Scroll from '../Components/Scroll';
import Header from '../Components/Header';

// import {SharedElement} from 'react-navigation-shared-element';
class Home extends Component {
  state = {
    name: [
      {
        name: 'Elante Mall',
        image:
          'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/09/17/868680-malls-073019.jpg',
        id: '1',
      },
      {
        name: 'DLF City Centre Mall',
        image:
          'https://image.cnbcfm.com/api/v1/image/106663944-15974132592020-08-14t124723z_227007906_rc2odi9q3um2_rtrmadp_0_usa-economy.jpeg?v=1614082922&w=678&h=381',
        id: '2',
      },
      {
        name: 'TDI Mall',
        image:
          'https://cms.qz.com/wp-content/uploads/2018/10/AP_454703923201-e1538586811291.jpg?quality=75&strip=all&w=1600&h=900&crop=1',
        id: '3',
      },
      {
        name: 'Piccadily Square Mall',
        image:
          'https://www.holidify.com/images/cmsuploads/compressed/Screenshot2021-02-03at2.25.30PM_20210203142540.png',
        id: '4',
      },
    ],
    stores: [
      {
        name: 'Addidas',
        image:
          'https://specials-images.forbesimg.com/imageserve/5f2d6bcdadac6f6dfc573985/960x0.jpg?cropX1=878&cropX2=5511&cropY1=345&cropY2=2517',
        id: '1',
      },
      {
        name: 'Nike',
        image:
          'https://footwearnews.com/wp-content/uploads/2018/04/nike-store-3.jpg?w=1024',
        id: '2',
      },
      {
        name: 'Puma',
        image:
          'https://content3.jdmagicbox.com/comp/delhi/u3/011pxx11.xx11.120127172634.j5u3/catalogue/puma-store-delhi-1z5c3ud9zd.jpg?clr=661700',
        id: '3',
      },
      {
        name: 'Rolex',
        image:
          'https://vulcanwatchstraps.com/images/article/how-to-beat-the-rolex-waiting-list.jpg',
        id: '4',
      },
    ],
  };
  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} />
        <ScrollView>
          <View style={styles.banner}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('detail')}>
              <Image
                style={styles.bannerimg}
                source={require('../images/bannerimg.png')}
              />
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: 'bold',
                  marginVertical: 10,
                  justifyContent: 'center',
                  textAlign: 'center',
                }}>
                Up to 70% Sale
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'normal',
                  textAlign: 'center',
                }}>
                ZARA • 5 Jan - 30 Jan 2021
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.Flist}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Malls</Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('mallDetails', {
                  item: this.state.name,
                  name: 'Mall',
                })
              }>
              <Text style={{fontSize: 14, color: '#03A587'}}>See All</Text>
            </TouchableOpacity>
          </View>

          <Scroll data={this.state.name} navigation={this.props.navigation} />

          <View style={styles.Flist}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Stores</Text>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('mallDetails', {
                  item: this.state.stores,
                  name: 'Stores',
                })
              }>
              <Text style={{fontSize: 14, color: '#03A587'}}>See All</Text>
            </TouchableOpacity>
          </View>
          <Scroll data={this.state.stores} navigation={this.props.navigation} />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    height: 50,
    alignItems: 'center',
  },
  banner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerimg: {
    height: 270,
    marginTop: 10,
    width: 375,
    borderRadius: 20,
  },
  Flist: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    height: 50,
    alignItems: 'center',
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
  Footer: {
    marginBottom: 100,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 16,
    alignItems: 'center',
  },

  footerimg: {
    height: 25,
    width: 25,
  },
});

export default Home;
