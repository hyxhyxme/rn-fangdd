import React, { Component } from 'react'
import { Text, View,Image } from 'react-native'
import styles from './style-home.js'
export default class HouseItem extends Component {
    
    render() {
        return (
            <View style={styles.houseWrapper}>
                <View style={styles.ImgWrapper}>
                    <Image source={{uri:this.props.name.coverImage}}  style={styles.houseImg}></Image>
                </View>
                <View style={styles.textWrapper}>
                    <Text numberOfLines={1} style={styles.richName}>{this.props.name.richName}</Text>
                    <View style={styles.text2Wrapper}>
                        <View style={styles.InfoWrapper}>
                            <Text style={styles.name}>{this.props.name.name}|{this.props.name.area}㎡</Text>
                            <Text style={styles.cellName}>{this.props.name.cellName}|{this.props.name.sectionName}</Text>
                        </View>
                        <View style={styles.priceWrapper}>
                            <Text style={styles.totalPrice}>{this.props.name.totalPrice/10000}万</Text>
                            <Text style={styles.price}>{this.props.name.price}元/㎡</Text>
                        </View>
                    </View>
                    <Text numberOfLines={1} style={styles.tags}>满五年</Text>
                    <Text numberOfLines={1} style={styles.address}>{this.props.name.address}</Text>
                    
                </View>
            </View>
        )
    }
}
