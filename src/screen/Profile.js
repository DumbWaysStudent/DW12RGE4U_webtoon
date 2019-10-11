import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Left, Right, Text } from 'native-base';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class Profile extends Component {
  render() {
    return (
      <View>
        <Header style={styles.headerStyle}>
          <Left style={styles.headerLeft}>
            <Title>Profile</Title>
          </Left>
          <Right style={styles.headerRight}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('EditProfile')}>
              <Icon name='pencil' size={27} color='orange' />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.contentProfile}>
          <Icon name='user-circle' color='gray' size={130} />
          <Text style={styles.profileTitle}>Ilham Muhammad</Text>
        </View>

        <View style={styles.buttonList}>
          <TouchableOpacity style={styles.buttonS} onPress={() => this.props.navigation.navigate('MyWebtoon')}>
            <Text style={styles.buttonTitle1}>
              My Webtoon Creation
            </Text>
            <Icon name='angle-right' size={30} style={{ paddingTop: 7, paddingRight: 15 }}/>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.buttonTitle2} onPress={() => this.props.navigation.navigate('Login')} >Log Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#fff',
  },
  headerLeft: {
    paddingLeft: 10
  },
  headerRight: {
    paddingRight: 8,
  },
  contentProfile: {
    alignItems: 'center',
    paddingTop: 30,
  },
  profileTitle: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonList: {
    marginTop: 70,
  },
  buttonS: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonTitle1: {
    fontSize: 20,
    paddingLeft: 5,
    paddingVertical: 10,
  },
  buttonTitle2: {
    fontSize: 20,
    paddingLeft: 5,
    paddingVertical: 10,
    borderBottomWidth: 2,
  }
});
