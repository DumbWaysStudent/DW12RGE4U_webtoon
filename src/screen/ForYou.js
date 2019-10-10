import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';
import { Text, Item, Input } from 'native-base';
import Slideshow from 'react-native-image-slider-show';
import Icon from 'react-native-vector-icons/FontAwesome';

import { banners } from '../components/Link';

export class ForYou extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          url: 'https://3.bp.blogspot.com/-DZA0DTCWPlk/XM4zp5rf4CI/AAAAAAAAApk/gwJBzi0DPMwOl6rOBHpue_TXbnB0_0AGwCLcBGAs/w1200-h630-p-k-no-nu/Pasutri%2BGaje%2BSeason%2B2%2BAnissa%2BNisfihani%2BWebtoon%2BIndonesia.JPG',
        }, {
          url: 'https://swebtoon-phinf.pstatic.net/20190502_128/1556776788182u0tYR_JPEG/thumb_ipad.jp',
        }, {
          url: 'https://cdn.idntimes.com/content-images/community/2019/03/opera-snapshot-2019-03-10-190819-wwwwebtoonscom-aa64078ba943e7895194e96f853d4d20.png'
        }],
    };
  }

  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 3000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  renderFavorite(item) {
    return (
      <View style={styles.favContentStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <Image source={{ uri: item.url }} style={styles.favImgStyle} />
        </TouchableOpacity>
        <Text>{item.title}</Text>
      </View>
    );
  }

  renderAll(item) {
    return (
      <View style={styles.allContentStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
          <Image source={{ uri: item.url }} style={styles.allImageStyle} />
        </TouchableOpacity>
        <View style={styles.allTitle}>
          <Text>{item.title}</Text>
          <TouchableOpacity style={styles.buttonFav}>
            <Text style={styles.buttonFavTitle}>+ Favourite</Text>
          </TouchableOpacity>
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

        <View style={styles.slideShow}>
          <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            onPositionChanged={position => this.setState({ position })}
            height={160}
          />
        </View>

        <View>
          <Text style={styles.favHeaderStyle}>Favourite</Text>
          <FlatList
            data={banners}
            renderItem={({ item }) => this.renderFavorite(item)}
            keyExtractor={item => item.title}
            horizontal
          />
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.allHeaderStyle}>All</Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={banners}
            renderItem={({ item }) => this.renderAll(item)}
            keyExtractor={item => item.title}
          />
        </View>

      </SafeAreaView>
    );
  }
}
export default ForYou;

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
  },
  searchStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  favContentStyle: {
    paddingLeft: 3,
  },
  favHeaderStyle: {
    marginTop: 15,
    marginLeft: 3,
    fontSize: 23,
    marginBottom: 3,
  },
  favImgStyle: {
    height: 110,
    width: 110,
    borderRadius: 2,
    borderWidth: 2,
    borderColor: '#403a36',
    marginBottom: 2,
    marginRight: 10,
  },
  allContentStyle: {
    flexDirection: 'row',
    marginLeft: 3
  },
  allHeaderStyle: {
    marginTop: 10,
    marginLeft: 3,
    fontSize: 23,
    marginBottom: 3,
  },
  allImageStyle: {
    height: 65,
    width: 65,
    borderColor: '#403a36',
    borderWidth: 2,
    borderRadius: 2,
    marginBottom: 10
  },
  allTitle: {
    marginLeft: 10,
    marginTop: 5,
  },
  buttonFav: {
    backgroundColor: '#fb9224',
    width: 90,
    borderWidth: 1,
    borderColor: '#403a36',
    elevation: 1,
    paddingVertical: 1,
    marginTop: 4
  },
  buttonFavTitle: {
    fontSize: 13,
    textAlign: 'center',
  },
  slideShow: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 2,
    marginLeft: 2
  }
};
