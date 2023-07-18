import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'; 
import Icons from 'react-native-vector-icons/Ionicons';

const Furniture = ({ exactProduct }) => {
  return (
    <View style={styles.container}>
        {/* Items description section starts here */}
        <View style={styles.itemdesc}>
            {/* SaverDeal tag & Price */}
            <View>
                <Text style={{fontWeight:'bold', fontSize:18}} > {exactProduct.name}  </Text>
                <View style={styles.saverDeal}>
                    <Text style={styles.saverDealText}> Saver Deal </Text> 
                </View>
                <View style={styles.price} >
                    <Text style={styles.disc}> 32% off  </Text>
                    <Text style={styles.mrp}> ₹{exactProduct.MRP} </Text>
                    <Text style={styles.disPrice}> ₹{exactProduct.disPrice} </Text>
                </View>
            </View>
            {/* Promises like warranty, returns, secure */}
            <View style={styles.appPromises}>
                <View style={styles.promise}> 
                    <Icons name="shield-checkmark" style={styles.icons} />
                    <Text style={{textAlign:'center'}}> 100% Secure Payments </Text>
                </View>
                <View style={styles.promise}>
                    <Icons name="sync" style={styles.icons} /> 
                    <Text style={{textAlign:'center'}}> 7days Replacement </Text>
                </View>
                <View style={styles.promise}>
                    <Icon name="lock" style={styles.icons} /> 
                    <Text style={{textAlign:'center'}}> 1 Year     Warranty </Text>
                </View>
            </View>
            {/* Highlights of the item */}
            <View>
                <View>
                    <Text style={{fontSize:20, fontWeight:'bold'}}> Highlights </Text>
                </View>

                <View style={{flexDirection:'row', gap:20}}>  
                    <View style={{gap:10}}>
                        <View>
                            <Text style={styles.descFeature}> Processor </Text>
                            <Text style={{fontSize:16}}> {exactProduct.highlights1} </Text>
                        </View>
                        <View>
                            <Text style={styles.descFeature}> RAM | SSD Storage </Text>
                            <Text style={{fontSize:16}}> {exactProduct.highlights2} </Text>
                        </View>
                    </View>

                    <View style={{gap:10}}>
                        <View>
                            <Text style={styles.descFeature}> Operating System </Text>
                            <Text style={{fontSize:16}}> {exactProduct.highlights3} </Text>
                        </View>
                        <View>
                            <Text style={styles.descFeature}> Graphics </Text>
                            <Text style={{fontSize:16}}> {exactProduct.highlights4} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
        {/* Items description section ends here */}

        {/* Add to Cart & Buy Now Buttons starts here */}
        <View style={styles.buySection}>
            <View style={styles.buy}>
                <View style={styles.addCart}>
                    <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}> Add to Cart </Text>
                </View>
                <View style={styles.buyNow}>
                    <Text style={{color:'#fff', fontSize:16, fontWeight:'bold'}}> Buy Now </Text>
                </View>
            </View>
        </View>
        {/* Add to Cart & Buy Now Buttons ends here */}
    </View>
  )
}

const styles = StyleSheet.create({
    container:
    {
        height:'54%',
        justifyContent:'space-between',
        paddingTop:5,
    },
    itemdesc:
    {
        gap:10,
        paddingLeft:4,
    },  
    saverDeal:
    {
        backgroundColor:'#25a642',
        width:80,
    },  
    saverDealText:
    {
        color:'#fff',
    },
    price:
    {
        flexDirection:'row',
        alignItems:'center'
    },
    disc:
    {
        color:'green',
        fontSize:18,
    },
    mrp:
    {
        fontSize:18,
        textDecorationLine: 'line-through',
        color:'grey',
    },
    disPrice:
    {
        fontSize:20,
    },
    appPromises: 
    {
        flexDirection:'row',
        gap:5,
        textAlign:'center'
    },
    promise:
    {
        width:'33%',
        justifyContent:'center',
        alignContent:'center',
    },
    icons:
    {
        textAlign:'center', 
        fontSize:35, 
        color:'grey',
    },

    buy:
    {
        flexDirection:'row',
        width:'100%',
        height:50,
    },
    addCart:
    {
        backgroundColor:'#ff9f00',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
    },
    buyNow:
    {
        backgroundColor:'#fb641b',
        width:'50%',
        alignItems:'center',
        justifyContent:'center',
    },


    // description
    descFeature:
    {
        color:'grey', 
        fontSize:16,
    }
})

export default Furniture