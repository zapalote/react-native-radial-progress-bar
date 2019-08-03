// inspired on https://codepen.io/xgad/post/svg-radial-progress-meters

import React from 'react';
import { View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

export default class RadialProgressBar extends React.PureComponent {

  render() {
    const { size, width, tintColor, backgroundColor, children } = this.props;

    const percentage = Math.min(100, Math.max(0, this.props.fill)); // clamp percentage
    const strokeWidth = width;
    const half = size / 2;
    const radius = half - strokeWidth * 0.8;
    const strokeDashes = [2 * Math.PI * radius];
    const strokeOffset = -1 * strokeDashes * (percentage/100);

    return (
      <View>
        <View style={{ transform: [{ rotate: '-90deg' }] }} >
          <Svg width={size} height={size}>
            <Circle cx={half} cy={half} r={radius} fill={'none'} stroke={tintColor} strokeWidth={strokeWidth} />
            <Circle cx={half} cy={half} r={radius} fill={'none'} stroke={backgroundColor} strokeWidth={strokeWidth}
              strokeDasharray={strokeDashes} strokeDashoffset={strokeOffset} />
          </Svg>
        </View>
        {
          children && children(percentage)
        }
      </View>
    );
  }
}
