/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ViewPropTypes,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';

export default function MessageImage({
  containerStyle,
  lightboxProps,
  imageProps,
  imageStyle,
  currentMessage,
  refreshButton,
  playButton,
  playClick,
}) {
  console.log('C. Msg. -> ', JSON.stringify(currentMessage));
  if (!currentMessage.mediaStatus) {
    currentMessage.mediaStatus = '';
  }
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => {
          const retryId = currentMessage.mediaStatus.includes('Fail') ? currentMessage._id : null;
          playClick(currentMessage.video, retryId);
        }}
      >
        <ImageBackground
          {...imageProps}
          style={[
            styles.image,
            imageStyle,
            { alignItems: 'center', justifyContent: 'center' },
          ]}
          source={{ uri: currentMessage.media_thumb }}
        >
          {!(/Fail|Uploading/.test(currentMessage.mediaStatus)) && (
            <Image source={playButton} style={{ width: 60, height: 60 }} />
          )}
          {currentMessage.mediaStatus.includes('Fail') && (
            <Text style={styles.refresh}>
              Retry
            </Text>
          )}
        </ImageBackground>
      </TouchableOpacity>
      {currentMessage.mediaStatus.includes('Uploading') && <ActivityIndicator style={StyleSheet.absoluteFill} color="#16d097" size="large" />}
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
  refresh: {
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 5,
    backgroundColor: '#0009',
    color: '#FFF',
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
