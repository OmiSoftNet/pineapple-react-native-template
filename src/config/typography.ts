import {theme} from '~config/theme';
import {StyleSheet} from 'react-native';

export const ROOT_FONT_SIZE = 16;

export const makeFontSize = (multiplier = 1) => ROOT_FONT_SIZE * multiplier;

export const fontSize = {
  h1: makeFontSize(2),
  h2: makeFontSize(1.5),
  h3: makeFontSize(1.17),
  h4: makeFontSize(1),
  h5: makeFontSize(0.83),
  h6: makeFontSize(0.67),
};

export const typography = StyleSheet.create({
  title: {
    fontSize: fontSize.h3,
    fontWeight: '700',
    color: theme.colors.black,
  },
  text: {
    fontSize: fontSize.h4,
    fontWeight: '400',
    color: theme.colors.text,
  },
  description: {
    fontSize: fontSize.h5,
    fontWeight: '300',
    color: theme.colors.gray,
  },
});
