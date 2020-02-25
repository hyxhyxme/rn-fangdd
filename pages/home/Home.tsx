import React, { Component} from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import styles from './style-home.js'
import Swiper from './Swiper'
import Search from './Search'
import Grids from './Grids'
import HouseList from './HouseList'
class Home extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <View style={styles.logoWrapper}>
                            <Image style={styles.logo} source={require('../../assets/images/logo.png')}></Image>
                        </View>
                        <View style={styles.searchWrapper}>
                            <Search></Search>
                        </View>
                    </View>
                    <View style={styles.swiper}>
                        <Swiper></Swiper>
                    </View> 
                    <View>
                        <Grids></Grids>
                    </View>
                    <View>
                        <HouseList></HouseList>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

export default Home