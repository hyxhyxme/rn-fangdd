import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { InputItem } from '@ant-design/react-native'
export default class Search extends Component {
    render() {
        return (
            <View>
                <InputItem
                    defaultValue="北京"
                    clear
                    style={{color:'#ccc'}}
                />
            </View>
        )
    }
}
