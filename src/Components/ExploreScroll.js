import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
  Touchable,
} from 'react-native';
import mallLogo from '../images/malllogo.png';

class ExploreScroll extends Component {
  state = {
    name: [
      {
        MallName: 'Elante Mall',
        stores: 215,
        image:
          'https://s3.india.com/wp-content/uploads/2019/08/Elante-Mall.jpg',
        id: '1',
      },
      {
        MallName: 'DLF City Centre Mall',
        stores: 130,
        image:
          'https://image.cnbcfm.com/api/v1/image/106663944-15974132592020-08-14t124723z_227007906_rc2odi9q3um2_rtrmadp_0_usa-economy.jpeg?v=1614082922&w=678&h=381',
        id: '2',
      },
      {
        MallName: 'TDI Mall',
        stores: 122,
        image:
          'https://cms.qz.com/wp-content/uploads/2018/10/AP_454703923201-e1538586811291.jpg?quality=75&strip=all&w=1600&h=900&crop=1',
        id: '3',
      },
      {
        MallName: 'Piccadily Square Mall',
        stores: 131,
        image:
          'https://www.holidify.com/images/cmsuploads/compressed/Screenshot2021-02-03at2.25.30PM_20210203142540.png',
        id: '4',
      },
    ],
    stores: [
      {
        MallName: 'Addidas',

        image:
          'https://specials-images.forbesimg.com/imageserve/5f2d6bcdadac6f6dfc573985/960x0.jpg?cropX1=878&cropX2=5511&cropY1=345&cropY2=2517',
        logo:
          'https://i.pinimg.com/originals/5e/08/de/5e08de427fdd99badabc46a3187108ae.png',
        id: '1',
      },
      {
        MallName: 'Nike',

        image:
          'https://footwearnews.com/wp-content/uploads/2018/04/nike-store-3.jpg?w=1024',
        logo:
          'https://cdn.iconscout.com/icon/free/png-512/nike-11-569338.png',
        id: '2',
      },
      {
        MallName: 'Puma',

        image:
          'https://content3.jdmagicbox.com/comp/delhi/u3/011pxx11.xx11.120127172634.j5u3/catalogue/puma-store-delhi-1z5c3ud9zd.jpg?clr=661700',
        logo:
          'https://lh3.googleusercontent.com/proxy/MIzyuPNek_cIorjxJGdyn7nGceEBVDFvYijaSR_ZM0oBnbWBoreTMu_2ICJqYqFuV3rlRIPfkyJf3ytvXoW9evhaGf1z9HCzbqVxwymEE6aU',
        id: '3',
      },
      {
        MallName: 'Rolex',

        image:
          'https://vulcanwatchstraps.com/images/article/how-to-beat-the-rolex-waiting-list.jpg',
        logo:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Xetgg3P8um0-BXvR0yPID4NuHQCO0oECjjz1EnKlAkifkYbP3W8zbu-V34r_AmRLjF6AsNcQeqo&usqp=CAU',
        id: '4',
      },
    ],
    dine: [
      {
        MallName: 'Dominos',

        image:
          'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2019/10/domino-s-pizza-1571307449.jpg',
        logo:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Dominos_pizza_logo.svg/1200px-Dominos_pizza_logo.svg.png',
        id: '1',
      },
      {
        MallName: 'Burger King',

        image:
          'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1058912512%2F0x0.jpg%3Ffit%3Dscale',
        logo:
          'https://1000logos.net/wp-content/uploads/2016/10/Burger-King-Logo-1969.jpg',
        id: '2',
      },
      {
        MallName: 'StarBucks',

        image:
          'https://post.healthline.com/wp-content/uploads/2020/03/Starbucks_Storefront_1200x628-facebook-1200x628.jpg',
        logo:
          'https://media-exp1.licdn.com/dms/image/C4D0BAQEQxk9y2rk7Hw/company-logo_200_200/0/1519856020155?e=2159024400&v=beta&t=pn2-wVp-xJmQErlFwebEr6_6lR5moPJROEGca24sVyo',
        id: '3',
      },
      {
        MallName: 'Pizza Hut',

        image:
          'https://media-cdn.tripadvisor.com/media/photo-s/0f/88/38/81/pizza-hut-shop-barra.jpg',
        logo:
          'https://upload.wikimedia.org/wikipedia/sco/thumb/d/d2/Pizza_Hut_logo.svg/1088px-Pizza_Hut_logo.svg.png',
        id: '4',
      },
    ],
    offers: [
      {
        MallName: '70% OFF',

        image:
          'https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.6/w_300,c_limit/e7f476f0-5a2d-4448-99af-3626342d5ed0/air-max-95-shoe-jbmQ47.jpg',
        id: '1',
      },
      {
        MallName: 'Buy 2 Get 1 Free',

        image:
          'https://robbreport.com/wp-content/uploads/2020/09/levis.jpg?w=1000',
        id: '2',
      },
      {
        MallName: 'Flat 5% OFF',

        image: 'https://staticimg.titan.co.in/Titan/Catalog/1805NM01_2.jpg',
        id: '3',
      },
      {
        MallName: '10% OFF',

        image:
          'https://files.inkmonk.com/site/20190321_170050164058_8f2fbb_Banner_T-shirt-new_1.png',
        id: '4',
      },
    ],
    bgcolor: '#03A587',
    tabIndex: 0,
    tabName: [
      {
        Mall: 'Malls',
        id: '1',
      },
      {
        Mall: 'Stores',
        id: '2',
      },
      {
        Mall: 'Dine',
        id: '3',
      },
      {
        Mall: 'Offers',
        id: '4',
      },
    ],
  };

  TabView = () => {
    
    if (this.state.tabIndex == 1) {
      return (
        <ScrollView>
          {this.state.stores.map((item, index) => (
            <View style={styles.list}>
              <View style={styles.Flist}>
                <Image source={{uri: item.image}} style={styles.img} />
              </View>
              <View style={styles.FlistData} key={index}>
                <View style={{...styles.FlistText, flexDirection:'row'}} key={index}>
                  <View style={{borderWidth:1, borderRadius:10, borderColor:'#E6E8EB'}}>
                  <Image source={{uri:item.logo}} style={{height:56, width:56}} />
                  </View>
                  <View style={{paddingVertical:3, paddingHorizontal:10}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', marginTop: 2}}>
                    {item.MallName}
                  </Text>
                  <Text
                    style={{fontSize: 10, paddingVertical:10, color:'#5D6167'}}>
                    Elante Mall
                  </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else if (this.state.tabIndex == 2) {
      return (
        <ScrollView>
          {this.state.dine.map((item, index) => (
            <View style={styles.list}>
              <View style={styles.Flist}>
                <Image source={{uri: item.image}} style={styles.img} />
              </View>
              <View style={styles.FlistData} key={index}>
                <View style={{...styles.FlistText, flexDirection:'row'}} key={index}>
                  <View style={{borderWidth:1, borderRadius:10, borderColor:'#E6E8EB'}}>
                  <Image source={{uri:item.logo}} style={{height:56, width:56}} />
                  </View>
                  <View style={{paddingVertical:3, paddingHorizontal:10}}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', marginTop: 2}}>
                    {item.MallName}
                  </Text>
                  <Text
                    style={{fontSize: 10, paddingVertical:10, color:'#5D6167'}}>
                    Elante Mall
                  </Text>
                  </View>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else if (this.state.tabIndex == 3) {
      return (
        <ScrollView>
          {this.state.offers.map((item, index) => (
            <View style={styles.list}>
              <View style={styles.Flist}>
                <TouchableOpacity  onPress={() => this.props.navigation.navigate('offers')}>
                  
                <Image source={{uri: item.image}} style={styles.img} />
                </TouchableOpacity>
              </View>
              <View style={styles.FlistData} key={index}>
                <View style={styles.FlistText} key={index}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', marginTop: 2}}>
                    {item.MallName}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    } else {
      return (
        <ScrollView>
          {this.state.name.map((item, index) => (
            <View style={styles.list}>
              <View style={styles.Flist}>
                <Image source={{uri: item.image}} style={styles.img} />
              </View>
              <View style={styles.FlistData} key={index}>
                <View style={styles.FlistText} key={index}>
                  <Text
                    style={{fontSize: 16, fontWeight: 'bold', marginTop: 2}}>
                    {item.MallName}
                  </Text>
                  <Text
                    style={{fontSize: 10, fontWeight: 'normal', marginTop: 15}}>
                    {item.stores} Total Stores
                  </Text>
                </View>
                <View>
                  <Image source={mallLogo} style={{height: 56, width: 56}} />
                </View>
              </View>
            </View>
          ))}
        </ScrollView>
      );
    }
  };

  render() {
    const TabView = ({name, id, onPress, bgcolor}) => {
      const is_clicked = this.state.tabIndex === id;
      return (
        <TouchableOpacity
          style={{
            ...styles.btn,
            marginHorizontal: 5,
            backgroundColor: is_clicked ? '#03A587' : 'white',
          }}
          onPress={() => {
            onPress(id);
          }}>
          <Text style={{fontSize: 20, color: is_clicked ? 'white' : 'black'}}>
            {name}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={styles.container}>
        <View style={{paddingHorizontal: 16}}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={{marginBottom: 10}}>
            {this.state.tabName.map((item, index) => (
              <TabView
                name={item.Mall}
                key={index}
                id={index}
                
                onPress={id => this.setState({tabIndex: id})}
              />
            ))}
          </ScrollView>
        </View>
        {this.TabView()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  list: {
    marginHorizontal: 16,
    marginVertical: 10,
  },
  Flist: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 228,
    width: 400,
    borderRadius: 20,
  },
  FlistData: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginVertical: 20,
    justifyContent: 'space-between',
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
    borderColor: '#E6E8EB',
  },
});

export default ExploreScroll;
