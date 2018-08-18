import { StyleSheet } from 'react-native';

import { TEXT_ON_SECONDARY } from '../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  firstName: {
    color: TEXT_ON_SECONDARY,
    flexShrink: 0,
    fontSize: 40,
    padding: 5,
    textAlignVertical: 'center',
  },
  lastName: {
    flex: 1,
    fontSize: 20,
    padding: 5,
    paddingBottom: 12,
    textAlignVertical: 'bottom',
  },
  nameGroup: {
    flex: 1,
    flexDirection: 'row',
  },
});
