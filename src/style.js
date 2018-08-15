import { StyleSheet } from 'react-native';

import { PRIMARY_DARK, TEXT_ON_PRIMARY } from './constants/colors';

export default StyleSheet.create({
  headerTitle: {
    color: TEXT_ON_PRIMARY,
    fontSize: 24,
  },
  headerTitleContainer: {
    backgroundColor: PRIMARY_DARK,
  },
});
