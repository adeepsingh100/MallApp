import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
} from 'react-native';
import down from '../images/down.png';
import search from '../images/search.png';
import headbar from '../images/headbar.png';
import select from '../images/select.png';
import unselect from '../images/unselect.png'
class Header extends Component {
  state = {
    isVisible: false,
  };
  displayModal(show) {
    this.setState({isVisible: show});
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                this.displayModal(true);
              }}>
              <Text style={{fontSize: 20}}>India</Text>
            </TouchableOpacity>
            <Image source={down} style={{marginVertical: 3}} />
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('search')}>
            <Image source={search} />
          </TouchableOpacity>
        </View>

        <Modal
          animationType={'slide'}
          transparent={false}
          visible={this.state.isVisible}>
          <View style={styles.ModalContainer}>
            <View style={styles.head}>
              <TouchableOpacity
                onPress={() => {
                  this.displayModal(!this.state.isVisible);
                }}>

                <Image source={headbar}/>
              </TouchableOpacity>
            </View>
            <View >
                <Text style={{fontSize:20, fontWeight:'bold',paddingVertical:15}}>Choose your сity</Text>
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Jammu</Text>
              <Image source={select} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Chandigarh</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Baramulla</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Mohali</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Mumbai</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Katra</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Amritsar</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Srinagar</Text>
              <Image source={unselect} />
            </View>
            <View style={styles.data}>
              <Text style={{fontSize:16,fontWeight:'bold'}}>Agra</Text>
              <Image source={unselect} />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 16,
    height: 60,
    alignItems: 'center',
  },
  ModalContainer: {
    padding: 25,
    backgroundColor:'white',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    
  },
  head:{
    alignItems:'center'
  },
  data:{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20
  }
});

export default Header;
