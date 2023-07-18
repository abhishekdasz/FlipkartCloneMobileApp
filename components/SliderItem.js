import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

const SliderComponent = ({ exactProduct }) => {
  const { images } = exactProduct;
  return (
    <View style={styles.container}>
      <Swiper
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
        style={styles.swiper}
      >
        {
          images.map((item, index)=>(
            <View style={styles.slide} key={index}>
              <Image source={item.source} style={styles.image} resizeMode='cover'/>
            </View>
          ))
        }
    </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    height:'46%',
  },
  swiper:
  {
    justifyContent:'center',
    alignItems:'center',
  },
  dotStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  activeDotStyle: {
    backgroundColor: '#000',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  image: {
    width: '100%', // You can set the width as a percentage or a specific value
    height: '100%', // You can set the height as a specific value
  },

});

export default SliderComponent;
