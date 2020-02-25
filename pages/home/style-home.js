import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    wrapper: {
        paddingTop: 30
    },
    header: {
        height:44,
        flexDirection: "row",
        alignItems:"center",
        justifyContent:'center',
    },
    logoWrapper: {
        width:'30%',
        flex:1,
        alignItems:"center",
        justifyContent:'center',
    },
    logo: {
        width:57,
        height:22,
    },
    searchWrapper:{
        marginLeft:'10%',
        marginRight:'10%',
        width: '50%',
        height: '80%',
        backgroundColor:'#f2f2f2',
        borderRadius:10,
    },
    swiper: {
        height: 170,
    },
    containerHorizontal: {
        marginTop:-60,
    },
    slideImg: {
        height: 170,
        width: '100%'
    },
    houseWrapper: {
        width:'100%',
        height:120,
        flexDirection:'row',
        alignItems:'center',
        padding: 15,
       
    },
    ImgWrapper:{
        width:'30%',
        
    },
    textWrapper: {
        width:'70%',
        height:'100%',
        paddingLeft:5,
    }, 
    houseImg : {
        width:'100%',
        height:100
    },
    InfoWrapper: {
        width:'70%',
    },
    priceWrapper: {
        width: '30%',
    },
    text2Wrapper:{
        flexDirection:'row',
    },
    richName: {
        fontSize: 16,
        fontWeight:'500'
    },
    name: {
        fontSize: 12,
        color:'#666666',
        paddingTop: 2,
    },
    cellName: {
        fontSize: 12,
        color:'#999999',
        paddingTop: 2,
    },
    totalPrice : {
        color: '#ef0000',
        fontSize: 16,
        fontWeight:'700'
    },
    price : {
        color: '#999999',
        fontSize: 12,
    },
    address: {
        fontSize: 12,
        color: '#666666',
        marginTop:5
    },
    tags: {
        fontSize: 10,
        height: 16,
        paddingTop: 3,
        paddingLeft:4,
        paddingRight:4,
        paddingBottom:2,
        marginTop: 5,
        width:45,
        backgroundColor: '#f3f5f7',
        borderRadius: 5,
        color: '#3d5688',
    }

})