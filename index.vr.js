import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  Model,
} from 'react-vr';

export default class HashrocketVR extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
          <Model
            source={{
              obj: asset('hashrocket.obj'),
            }}
            style={{
              color: '#af1e23',
              transform: [
                {translate: [0, -3, -12]}
              ]
            }}
          />
      </View>
    );
  }
};

AppRegistry.registerComponent('HashrocketVR', () => HashrocketVR);