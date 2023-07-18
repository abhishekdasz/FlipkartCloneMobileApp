import { View, Text } from 'react-native'
import React from 'react'
import SliderItem from './components/SliderItem';
import ItemDescription from './components/ItemDescription';

const ItemPage = ({ route }) => {
    const { exactProduct } = route.params;
  return (
    <View>
        <SliderItem exactProduct={exactProduct}/>
        <ItemDescription exactProduct={exactProduct}/>
    </View>
  )
}

export default ItemPage