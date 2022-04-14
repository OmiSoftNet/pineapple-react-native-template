import React from 'react';
import styles from './styles';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Pineapple from '~assets/icons/pineapple.svg';
import {theme} from '~config/theme';
import {
  BOX_START_X_POSITION,
  BOX_START_Y_POSITION,
} from '~components/Box/config';

const Box: React.FC = () => {
  const boxX = useSharedValue(BOX_START_X_POSITION);
  const boxY = useSharedValue(BOX_START_Y_POSITION);
  const context = useSharedValue({x: 0, y: 0});

  const panGesture = Gesture.Pan()
    .onStart(() => {
      context.value = {x: boxX.value, y: boxY.value};
    })
    .onUpdate(event => {
      const eventX = event.translationX + context.value.x;
      const eventY = event.translationY + context.value.y;

      boxX.value = eventX;
      boxY.value = eventY;
    });

  const animatedBox = useAnimatedStyle(
    () => ({
      transform: [
        {translateX: withSpring(boxX.value)},
        {translateY: withSpring(boxY.value)},
      ],
    }),
    [boxX, boxY],
  );

  return (
    <GestureDetector gesture={panGesture}>
      <Animated.View style={[styles.container, animatedBox]}>
        <Pineapple width={64} height={64} color={theme.colors.white} />
      </Animated.View>
    </GestureDetector>
  );
};

export default Box;
