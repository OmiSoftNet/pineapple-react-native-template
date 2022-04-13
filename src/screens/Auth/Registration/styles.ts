import {StyleSheet} from 'react-native';
import {theme} from '~config/theme';
import {typography} from '~config/typography';

const styles = StyleSheet.create({
  toggleAuthContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: theme.spacing.medium,
  },
  toggleAuthText: {
    ...typography.text,
    marginRight: theme.spacing.xs,
  },
});

export default styles;
