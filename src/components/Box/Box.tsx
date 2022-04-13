import React from 'react';
import styles from './styles';
import {PanGestureHandler} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
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

  const panGestureEvent = useAnimatedGestureHandler({
    onStart: (event, context) => {
      context.x = boxX.value;
      context.y = boxY.value;
    },
    onActive: (event, context) => {
      const eventX = event.translationX + context.x;
      const eventY = event.translationY + context.y;

      boxX.value = eventX;
      boxY.value = eventY;
    },
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
    <PanGestureHandler onGestureEvent={panGestureEvent}>
      <Animated.View style={[styles.container, animatedBox]}>
        <Pineapple width={64} height={64} color={theme.colors.white} />
      </Animated.View>
    </PanGestureHandler>
  );
};

export default Box;
