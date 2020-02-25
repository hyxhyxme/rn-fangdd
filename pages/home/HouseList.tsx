import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { get } from '../../utils/http.js'
import  HouseItem  from './HouseItem'
export default class HouseList extends Component {
   state = {
        list : [1,2]
    }
    
    async componentWillMount(){
        let result = await get('http://hyxhyx.icu:8080/api/houses')
        
        this.setState({
            list: result
        })
    }
    render() {
        return (
            <View>
                {
                    this.state.list.map((value,index)=>{
                        return (
                            <View>
                                <HouseItem name={value}></HouseItem>
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}
