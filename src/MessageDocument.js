/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes,TouchableOpacity } from 'react-native';


export default function MessageDocument({
  containerStyle,
  lightboxProps,
  imageProps,
  imageStyle,
  currentMessage,
  image,
  imageclick,
  docdimes,
  
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      
      <TouchableOpacity onPress={()=>{imageclick(currentMessage.document)}}>
        <View style={[styles.image, imageStyle,{alignItems:'center',justifyContent:'center'}]}>
        <Image
          {...imageProps}
          style={docdimes}
          source={image}
        />
        </View>


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

MessageDocument.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
  imageProps: {},
  lightboxProps: {},
};

MessageDocument.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  imageStyle: Image.propTypes.style,
  imageProps: PropTypes.object,
  lightboxProps: PropTypes.object,
};
