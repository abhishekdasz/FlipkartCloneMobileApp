import React from 'react'
import { View, Text, Button, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native'
import { laptops } from './constants'

const Items = ({ navigation }) => {
  return (
    <ScrollView> 
    <View style={{gap:20}}>
        {
            laptops.map((products, index)=>(
                <TouchableOpacity onPress={() => navigation.navigate('Details', {exactProduct: products} )} style={{backgroundColor:'#fff'}} key={index}>
                <View style={styles.itemDiv}>
                    <View style={styles.leftImg}>
                        <Image source={products.source} style={styles.image} resizeMode='contain' />
                    </View>
                    <View style={styles.rightDetails}>
                        <Text style={{fontWeight:'bold', fontSize:18}}> {products.name} </Text> 
                        <View style={{backgroundColor:'#B12704', width:100, padding:3}}>
                            <Text style={{ color:'#fff', fontSize:12}}> Deal of the Day </Text>
                        </View>
                        <View  style={{flexDirection:'row', alignItems:'center'}} >
                            <Text style={{fontSize:20}}> ₹{products.disPrice} </Text>
                            <Text style={{fontSize:12,}}>MRP:</Text>
                            <Text style={styles.disPrice}>₹{products.MRP} </Text>
                        </View>
                        <View>
                            <Text style={styles.disc}> ({products.discount} off) </Text>
                        </View>
                        <View>
                            <Text> {products.delivery} </Text>
                            <Text> Free Delivery by Flipkart </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
            ))
        }
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    itemDiv:
    {
        height:180, 
        flexDirection:'row',
    },
    leftImg:
    {
        width:'50%',
        // padding:20,
        backgroundColor:'#fff',
    },  
    image:
    {
        width:'100%',
        height:'100%',
    },
    rightDetails:
    {
        justifyContent:'center'
    },
    disc:
    {
        fontSize:16,
        color:'green',
    },
    disPrice:
    {
        fontSize:12,
        textDecorationLine:'line-through',
        color:'grey'
    }
})

export default Items