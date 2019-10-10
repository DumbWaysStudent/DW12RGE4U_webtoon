import React, { Component } from 'react';
import { View, FlatList, Image } from 'react-native';

import { chapter } from '../components/Link';

class DetailEpisode extends Component {
  
  renderChapter(chap) {
    return (
      <View style={styles.containImg}>
        <Image source={{ uri: chap }} style={styles.imgStyle} />
      </View>
    );
  }
  
  render() {
    return (
      <View>
        <FlatList
          data={chapter}
          renderItem={({ item }) => this.renderChapter(item)}
          keyExtractor={item => item}

        />
      </View>
    );
  }
}
export default DetailEpisode;

const styles = {
  imgStyle: {
    marginBottom: 5,
    height: 560,
    width: '100%',
    resizeMode: 'contain'
  }
};
