import { StyleSheet } from 'react-native';

import { TEXT_ON_SECONDARY } from '../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  firstName: {
    color: TEXT_ON_SECONDARY,
    flex: 1,
    fontSize: 44,
    padding: 5,
    textAlignVertical: 'center',
  },
  lastName: {
    flex: 1,
    fontSize: 22,
    padding: 5,
    textAlignVertical: 'center',
  },
  nameGroup: {
    flex: 1,
  },
});
