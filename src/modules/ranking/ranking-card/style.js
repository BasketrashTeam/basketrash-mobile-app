import { StyleSheet } from 'react-native';
import { SECONDARY_LIGHT, TEXT_ON_SECONDARY } from '../../../constants/colors';

export default StyleSheet.create({
  cardContainer: {
    backgroundColor: SECONDARY_LIGHT,
    borderColor: TEXT_ON_SECONDARY,
    padding: 0,
  },
  divider: {
    backgroundColor: TEXT_ON_SECONDARY,
    marginBottom: 5,
  },
});
