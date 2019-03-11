/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes,TouchableOpacity,ImageBackground } from 'react-native';


export default function MessageImage({
  containerStyle,
  lightboxProps,
  imageProps,
  imageStyle,
  currentMessage,
  playButton,
  playClick,
}) {
  return (
    <View style={[styles.container, containerStyle]}>
     
     <TouchableOpacity onPress={()=>{playClick(currentMessage.video)}}>
        <ImageBackground
          {...imageProps}
          style={[styles.image, imageStyle, {alignItems:'center',justifyContent:'center'}]}
          source={{ uri: currentMessage.media_thumb }}
        >
            
         <Image
          source={playButton}
          style={{width:60,height:60}}
         ></Image>   
           
        </ImageBackground>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {
    width: 150,
    height: 100,
    borderRadius: 13,
    margin: 3,
    resizeMode: 'cover',
  },
  imageActive: {
    flex: 1,
    resizeMode: 'contain',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageImage.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object,
};
