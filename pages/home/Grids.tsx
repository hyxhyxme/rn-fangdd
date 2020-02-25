import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Grid } from '@ant-design/react-native'
const data = Array.from([
    {
        icon: 'https://oss-public.fangdd.com/prod/xf/cms/FlzIJ5cGM29xU2jbvWmGMKZc2m22.png',
        text: `线上售楼处`,
    },
    {
        icon: 'https://fsxf.fangdd.com/xfcms/FsWyDy2TdngpDTVDT3kZiYQOG-ca.png',
        text: `新房`,
    },
    {
        icon: 'https://fsxf.fangdd.com/xfcms/Fkut9zyXEimNZc-roDpOWc8cKyzA.png',
        text: `二手房`,
    },
    {
        icon: 'https://fsxf.fangdd.com/xfcms/FuOAW_mNt0WoWGhJ5Mv52kKn3dAi.png',
        text: `租房`,
    },
    {
        icon: 'https://fs.fangdd.com/static/FnjNb2Y3SpMZynsclbYFtskmoNbJ.png',
        text: `卖房`,
    },
    {
        icon: 'https://fsxf.fangdd.com/xfcms/Fm9sUl7cID-0A5y-fVaSUq0rQiD4.png',
        text: `查成交`,
    },
    {
        icon: 'https://fsxf.fangdd.com/xfcms/Fs8e4x5XQugKzqb5SQtdYnOeI75z.png',
        text: `找小区`,
    },
    {
        icon: 'https://fsxf.fangdd.com/xfcms/Fu8Ie1nog6W3PWZMZsCGT6Z25yeT.png',
        text: `查房价`,
    },
])
export default class Grids extends Component {
    render() {
        return (
            <View>
                <Grid
                    data={data}
                    columnNum={4}
                    onPress={(_el, index) => alert(index)}
                    itemStyle={{ height: 100, backgroundColor: '#ffffff' }}
                    hasLine={false}
                />
            </View>
        )
    }
}
