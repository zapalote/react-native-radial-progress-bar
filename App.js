// example RadialProgressBar, implemented with SVG
import React from 'react';
import { StyleSheet, View, Text, Dimensions, } from 'react-native';
import { RadialProgressBar } from './src';

const Size = Dimensions.get('window');
const Canvas = Math.min((Size.height > Size.width) ? Size.width : Size.height - 6, 500);
const diameter = Canvas * 0.5;

const App = () => {

  const stroke = 10;
  const percentage = 28;

  return (
    <View style={styles.container}>
      <RadialProgressBar size={diameter} width={stroke} fill={percentage}
        tintColor={'indigo'} backgroundColor={'#eee'}>
        {
          (percent) => (
            <View style={styles.circleStyle}>
              <Text style={styles.textStyle}>{`${percent}%`}</Text>
            </View>
          )
        }
      </RadialProgressBar>
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'transparent',
    width: diameter,
    height: diameter,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: diameter / 5,
    textAlign: 'center',
    color: '#888',
  },
});

export default App;
