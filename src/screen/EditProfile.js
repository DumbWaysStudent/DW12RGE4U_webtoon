import React, { Component } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Header, Right, Body, Item, Input } from 'native-base';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

class EditProfile extends Component {
  render() {
    return (
      <View>
        <Header style={styles.headerStyle}>
          <Body style={styles.headerLeft}>
            <Title>Edit Profile</Title>
          </Body>
          <Right style={styles.headerRight}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Icon name='check' size={27} color='orange' />
            </TouchableOpacity>
          </Right>
        </Header>
        <View style={styles.contentProfile}>
          <Icon name='user-circle' color='gray' size={130} />

          <Item regular style={styles.containSearchStyle}>
            <Input placeholder='Edit Your Profile' />
          </Item>
        </View>
      </View>
    );
  }
}
export default EditProfile;

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
    marginTop: 30,
  },
  profileInput: {
    marginTop: 10,
    fontSize: 25,
    fontWeight: 'bold',
  },
  containSearchStyle: {
    marginTop: 20,
    borderColor: '#403a36',
    paddingRight: 8,
    borderRadius: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    paddingLeft: 5,
    marginLeft: 30,
    marginRight: 30,
    height: 45
  }
});
