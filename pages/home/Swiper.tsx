import React, { Component } from 'react'
import { Carousel } from '@ant-design/react-native'

import {
  View,
  Image
} from 'react-native'

import styles from './style-home'

interface Props {

}

interface State {
  list: Array<any>
}

class Swiper extends Component<Props, State> {
  render() {
    return (
        <Carousel
          style={styles.wrapper}
          selectedIndex={0}
          autoplay
          infinite
        >
          <View
            style={styles.containerHorizontal}
            key={'1'}
          >
              <Image
                source={require('../../assets/images/banner1.png')}
                style={styles.slideImg}
              ></Image>
          </View>
          <View
            style={styles.containerHorizontal}
            key={'2'}
          >
            <Image
              source={require('../../assets/images/banner2.jpg')}
              style={styles.slideImg}
            ></Image>
          </View>
        </Carousel>
    )
  }
}

export default Swiper