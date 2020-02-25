import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator'

import {
  View,
  Text
} from 'react-native'

import styles from './style_index'

import News from '../news/News'
import Home from '../home/Home.tsx'

interface Props {

}

interface State {
  selectedTab: string
}

class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  state: State = {
    selectedTab: 'home'
  }

  componentDidMount() {

  }

  render() {
    return (
      <TabNavigator
        tabBarStyle={styles.tabBarStyle}
      >
        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({ selectedTab: 'home' })}
        >
          {<Home></Home>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'category'}
          title="资讯"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          onPress={() => this.setState({ selectedTab: 'category' })}
        >
          {<News></News>}
        </TabNavigator.Item>
       </TabNavigator>
    )
  }
}

export default Index