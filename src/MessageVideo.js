/* eslint global-require: 0 */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import Video from 'react-native-video';

export default function MessageVideo({ videoUrl,videoStyle }) {
  return (
    // eslint-disable-next-line no-use-before-define
    <View style={{flex:1,backgroundColor:'black'}}>
      <Video
        ref={(r) => {
          this.player = r;
        }}
        source={{ uri: videoUrl }}
        style={videoStyle}
        resizeMode="none"
        onBuffer={this.onBuffer}
        onLoadStart={this.onLoadStart}
        onLoad={this.onLoad}
        controls={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});

MessageVideo.defaultProps = {
  currentMessage: {
    // video: null,
  },
  containerStyle: {},
  videoStyle: {
    width: '100%',
    height:'100%',
    borderRadius: 0,
    margin: 3,
  },
  videoProps: {},
};

MessageVideo.propTypes = {
  currentMessage: PropTypes.object,
  containerStyle: ViewPropTypes.style,
  videoStyle: ViewPropTypes.style,
  videoProps: PropTypes.object,
};
