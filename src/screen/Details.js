import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';

import { listChapter } from '../components/Link';

class Details extends Component {

  renderChapter(list) {
    return (
      <View style={styles.containChapter}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailEp')}>
          <Image source={{ uri: list.url }} style={styles.imgChapterStyle} />
        </TouchableOpacity>
        <View style={styles.titleChapter}>
          <Text>Chapter {list.id}</Text>
          <Text>{list.id} Oktober 2019</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.imgContain}>
          <Image source={{ uri: listChapter[0].url }} style={styles.imgStyle} />
        </View>
        <FlatList
          data={listChapter}
          renderItem={({ item }) => this.renderChapter(item)}
          keyExtractor={item => item.title}
          showsVerticalScrollIndicator={false}
        />
      </View>
    );
  }
}
export default Details;

const styles = {
  imgContain: {
    borderColor: '#403a36',
    borderWidth: 2,
    marginBottom: 30,
  },
  imgStyle: {
    width: null,
    height: 200,
  },
  containChapter: {
    flexDirection: 'row',
  },
  imgChapterStyle: {
    height: 60,
    width: 60,
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 15,
    marginLeft: 25,
    marginRight: 10,
  },
  titleChapter: {
    justifyContent: 'space-evenly',
    paddingBottom: 20,
  }
};
