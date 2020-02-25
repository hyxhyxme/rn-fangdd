import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './style_news.js'
import { WebView } from 'react-native-webview'

interface Props {

}
interface State {

}
export default class News extends Component<Props, State> {
    state = {}
    render() {
        return (
            <View
                style={styles.Wrapper}>
                    <WebView
                    source={{ uri: 'https://m.fangdd.com/shanghai/news/t-list.html?topId=36649837' }}
                    style={{ 
                        width: '100%',
                        height: '100%'
                    }}
                    />
            </View>
        )
    }
}
