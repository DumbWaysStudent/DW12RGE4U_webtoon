import React, { Component } from 'react';
import { Text, View, Image, FlatList, TouchableOpacity, Share } from 'react-native';

const banners = [{
  id: 1,
  title: 'Kimetsu No Yaiba',
  url: 'https://2.bp.blogspot.com/-UHqDHgOqJGs/XO7bkHENpgI/AAAAAAAADc0/B50Pk9aOofwPhS6ObLv8M3MHiiRcqUMpQCKgBGAs/w914-h514-p-k-no-nu/tanjirou-kamado-kimetsu-no-yaiba-4K-32.jpg'
}, {
  id: 2,
  title: 'Pasutri Gaje',
  url: 'https://swebtoon-phinf.pstatic.net/20171202_17/1512140898074KBA7B_JPEG/thumb_ipad.jpg'
}, {
  id: 3,
  title: 'Young Mom',
  url: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-10-190819-wwwwebtoonscom-aa64078ba943e7895194e96f853d4d20.png'
}, {
  id: 4,
  title: 'Study Group',
  url: 'https://swebtoon-phinf.pstatic.net/20190502_128/1556776788182u0tYR_JPEG/thumb_ipad.jpg'
}, {
  id: 5,
  title: 'The Boss',
  url: 'https://vignette.wikia.nocookie.net/webtoon/images/d/d6/SAMPUL_T_BOSS.jpg/revision/latest?cb=20190105104612&path-prefix=id'
}, {
  id: 6,
  title: 'The Secret of ..',
  url: 'https://akcdn.detik.net.id/community/media/visual/2019/04/03/dac43146-7dd4-49f4-89ca-d81f57b070fc.jpeg?w=770&q=90'
}];

class Details extends Component {
  onSharePress = () => Share.share(shareOption);

  renderChapter(list) {
    return (
      <View style={styles.containChapter}>
        <TouchableOpacity>
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
          <Image source={{ uri: banners[0].url }} style={styles.imgStyle} />
        </View>
        <FlatList
          data={banners}
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
