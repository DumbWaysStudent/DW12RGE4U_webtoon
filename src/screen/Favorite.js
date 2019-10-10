import React, { Component } from 'react';
import { View, TouchableOpacity, SafeAreaView, FlatList, Image } from 'react-native';
import { Text, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import { banners } from '../components/Link';

class Favorite extends Component {

  renderAll(item) {
    return (
      <View style={styles.favContentStyle}>
        <TouchableOpacity>
          <Image source={{ uri: item.url }} style={styles.favImageStyle} />
        </TouchableOpacity>
        <View style={styles.favTitle}>
          <Text>{item.title}</Text>
          <Text style={styles.favTitleCount}>{item.favorite}+ Favorite</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Item regular style={styles.containSearchStyle}>
          <Input style={styles.searchStyle} />
          <TouchableOpacity>
            <Icon name='search' size={27} color='#403a36' />
          </TouchableOpacity>
        </Item>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={banners}
          renderItem={({ item }) => this.renderAll(item)}
          keyExtractor={item => item.title}
        />
      </SafeAreaView>
    );
  }
}
export default Favorite;

const styles = {
  container: {
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: 'whitesmoke',
  },
  containSearchStyle: {
    marginTop: 15,
    borderColor: '#403a36',
    paddingRight: 20,
    borderRadius: 3,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginBottom: 20
  },
  searchStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  favContentStyle: {
    flexDirection: 'row',
    marginLeft: 3
  },
  favImageStyle: {
    height: 65,
    width: 65,
    borderColor: '#403a36',
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 10
  },
  favTitle: {
    marginLeft: 10,
    justifyContent: 'space-evenly',
    marginBottom: 14
  },
  favTitleCount: {
    fontSize: 12,
    color: 'gray'
  }
};
