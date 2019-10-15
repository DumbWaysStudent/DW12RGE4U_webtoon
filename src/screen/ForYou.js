import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, SafeAreaView, ScrollView } from 'react-native';
import { Text, Item, Input, Card, CardItem } from 'native-base';
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
      <View>
        <Card style={styles.favCard}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
            <CardItem style={styles.favCardStyle}>
              <Image source={{ uri: item.url }} style={styles.favImgStyle} />
            </CardItem>
          </TouchableOpacity>
          <CardItem style={styles.favCardTitle}>
            <Text style={styles.fontTitle}>{item.title}</Text>
          </CardItem>
        </Card>
      </View>
    );
  }

  renderAll(item) {
    return (
      <Card style={styles.allContentStyle}>
        <CardItem style={{ flex: 2, backgroundColor: '#f7f7f7'}}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail')}>
            <Image source={{ uri: item.url }} style={styles.allImageStyle} />
          </TouchableOpacity>
        </CardItem>

        <CardItem style={styles.allTitle}>
          <Text style={{ alignSelf: 'flex-start', marginBottom: 2 }}>{item.title}</Text>
          <TouchableOpacity style={styles.buttonFav}>
            <Text style={[styles.buttonFavTitle, styles.fontTitle]}>+ Favourite</Text>
          </TouchableOpacity>
        </CardItem>
      </Card>
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>

        <View>
          <Item regular style={styles.containSearchStyle}>
            <Input style={styles.searchStyle} />
            <TouchableOpacity>
              <Icon name='search' size={25} color='#fb9224' />
            </TouchableOpacity>
          </Item>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>

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
        </ScrollView>
      </SafeAreaView>
    );
  }
}
export default ForYou;

const styles = {
  container: {
    paddingHorizontal: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
  containSearchStyle: {
    marginTop: 15,
    borderColor: '#fff',
    paddingRight: 20,
    borderRadius: 5,
    backgroundColor: '#eae9e9',
    marginBottom: 10
  },
  searchStyle: {
    paddingLeft: 15,
    paddingRight: 15
  },
  favHeaderStyle: {
    marginTop: 15,
    marginLeft: 3,
    fontSize: 23,
    fontFamily: 'Raleway-Medium',
  },
  favCard: {
    height: 170,
    width: 140,
  },
  favCardItemStyle: {
    height: null,
    width: null,
    alignItems: 'center',
  },
  favImgStyle: {
    height: 125,
    width: 170,
    marginTop: -12,
    flex: 4,
    marginHorizontal: -17,
    borderRadius: 2
  },
  favCardTitle: {
    flex: 1,
    height: null
  },
  allContentStyle: {
    flexDirection: 'row',
    width: 240,
    height: 80,
    backgroundColor: '#f7f7f7',
  },
  allHeaderStyle: {
    marginTop: 10,
    marginLeft: 7,
    fontSize: 23,
    marginBottom: 3,
    fontFamily: 'Raleway-Medium'
  },
  allImageStyle: {
    height: 76,
    width: 76,
    marginLeft: -15,
    marginTop: -1,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  allTitle: {
    flexDirection: 'column',
    backgroundColor: '#f7f7f7',
    flex: 6
  },
  buttonFav: {
    backgroundColor: '#fb9224',
    width: 90,
    borderWidth: 1,
    borderColor: '#fb9224',
    elevation: 2,
    paddingVertical: 1,
    marginTop: 4,
    borderRadius: 2,
    alignSelf: 'flex-start'
  },
  buttonFavTitle: {
    fontSize: 13,
    textAlign: 'center',
  },
  slideShow: {
    marginTop: 10,
    marginLeft: 2,
    borderBottomWidth: 2,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 2,
    borderColor: '#ddd',
    elevation: 2,
    borderRadius: 4,
    padding: 2,
  },
  fontTitle: {
    fontFamily: 'Raleway-Medium'
  },
  allText: {
    alignItems: 'flex-start'
  }
};
