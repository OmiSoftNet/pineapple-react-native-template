import {StyleSheet} from 'react-native';
import {BOX_SIZE} from './config';

const styles = StyleSheet.create({
  container: {
    width: BOX_SIZE,
    height: BOX_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    backgroundColor: 'orange',
  },
});

export default styles;
