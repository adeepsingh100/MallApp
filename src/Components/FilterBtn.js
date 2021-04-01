import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from 'react-native';
import settings from '../images/settings.png';
import headbar from '../images/headbar.png';
import select from '../images/select.png';
import unselect from '../images/unselect.png'
class FilterBtn extends Component {
  state = {
    isVisible: false,
    isVisibleSecond: false,
    isVisibleThird: false,
  };
  displayModal(show) {
    this.setState({isVisibleSecond: show});
  };
  displayModalTwo(show) {
    this.setState({isVisibleThird: show});
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            height: 40,
            width: 131,
            paddingHorizontal: 16,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Image source={settings} style={{marginRight: 10}} />
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>Filter</Text>
        </TouchableOpacity>
        <Modal
          visible={this.props.isVisible}
          onRequestClose={this.props.onRequestClose}
          animationType={'fade'}
          transparent={true}>
          <View style={styles.Modalcontainer}>
            <View
              style={styles.mainView}>
              <View
                style={{
                  paddingVertical: 20,

                  borderBottomWidth: 0.5,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                }}>
                <TouchableOpacity onPress={this.props.requestClose}>
                  <Image source={headbar} />
                </TouchableOpacity>
              </View>
              <View style={{paddingVertical: 40, padding: 20}}>
                <View style={styles.textView}>
                <TouchableOpacity
                    onPress={() => this.setState({isVisibleThird: true})}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Mall</Text>
                  </TouchableOpacity>
                  <Text
                    style={{color: '#5D6167', fontSize: 14, fontWeight: '900'}}>
                    All
                  </Text>
                </View>
                <View style={styles.textView}>
                <TouchableOpacity
                    onPress={() => this.setState({isVisibleThird: true})}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Store category
                  </Text>
                  </TouchableOpacity>
                  <Text
                    style={{color: '#5D6167', fontSize: 14, fontWeight: '900'}}>
                    All
                  </Text>
                </View>
                <View style={styles.textView}>
                <TouchableOpacity
                    onPress={() => this.setState({isVisibleSecond: true})}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Brand name
                  </Text>
                  </TouchableOpacity>
                  <Text
                    style={{color: '#5D6167', fontSize: 14, fontWeight: '900'}}>
                    All
                  </Text>
                </View>
                <View style={styles.textView}>
                  <TouchableOpacity
                    onPress={() => this.setState({isVisibleSecond: true})}>
                    <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                      Sort By
                    </Text>
                  </TouchableOpacity>
                  <Text
                    style={{color: '#5D6167', fontSize: 14, fontWeight: '900'}}>
                    Nearby
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
                  borderBottomWidth: 0.5,
                  elevation: 1.5,
                  ...styles.footer,
                }}>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={this.props.requestClose}>
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 14,
                      fontWeight: 'bold',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{...styles.btn, backgroundColor: '#03A587'}}>
                  <Text
                    style={{
                      paddingHorizontal: 10,
                      fontSize: 14,
                      fontWeight: 'bold',
                      color: 'white',
                    }}>
                    Apply
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.isVisibleSecond}
          animationType={'fade'}
          transparent={true}>
          <View style={styles.Modalcontainer}>
            <View
              style={styles.mainView}>
              <View
                style={{
                  paddingVertical: 20,
                  borderBottomWidth: 0.5,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                  <TouchableOpacity onPress={()=>this.setState({isVisibleSecond:false})}>
                <Text style={{color:'#03A587', fontSize:14}}>Cancel</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:16}}>Sort By</Text>
                <Text style={{color:'#03A587', fontSize:14}}>Done</Text>
              </View>
              <View style={{paddingVertical: 40, padding: 20}}>
                <View style={styles.textView2}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nearby</Text>
                  <Image source={select} />
                </View>
                <View style={styles.textView2}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    A - Z
                  </Text>
                  <Image source={unselect} />
                </View>
                <View style={styles.textView2}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Z - A
                  </Text>
                  <Image source={unselect} />
                </View>
                
              </View>
            </View>
          </View>
        </Modal>
        <Modal
          visible={this.state.isVisibleThird}
          animationType={'fade'}
          transparent={true}>
          <View style={styles.Modalcontainer}>
            <View
              style={styles.mainView}>
              <View
                style={{
                  paddingVertical: 20,
                  borderBottomWidth: 0.5,
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 20,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                  <TouchableOpacity onPress={()=>this.setState({isVisibleThird:false})}>
                <Text style={{color:'#03A587', fontSize:14}}>Cancel</Text>
                </TouchableOpacity>
                <Text style={{fontWeight:'bold', fontSize:16}}>Sort By</Text>
                <Text style={{color:'#03A587', fontSize:14}}>Done</Text>
              </View>
              <View style={{paddingVertical: 40, padding: 20}}>
                <View style={styles.textView2}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nearby</Text>
                  <Image source={select} />
                </View>
                <View style={styles.textView2}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    A - Z
                  </Text>
                  <Image source={unselect} />
                </View>
                <View style={styles.textView2}>
                  <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                    Z - A
                  </Text>
                  <Image source={unselect} />
                </View>
                
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width: 131,
    borderRadius: 20,
    backgroundColor: 'white',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 15,
    shadowColor: '#000',
    elevation: 3,
  },
  Modalcontainer: {
    backgroundColor: '#000000aa',
    height: 1170,
    justifyContent: 'center',
    paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0
  },
  textView: {
    borderBottomWidth: 0.5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textView2: {
    
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footer: {
    justifyContent: 'center',
    flexDirection: 'row',
    height:100,
    alignItems: 'center',
  
    justifyContent: 'center', 
      alignItems: 'center',
      position: 'relative',
      bottom: -180,
      width: '100%', 
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
  mainView:{
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height:'70%'
  }
});

export default FilterBtn;
