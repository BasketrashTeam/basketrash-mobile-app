import { StyleSheet } from 'react-native';

import { TEXT_ON_SECONDARY } from '../../../../constants/colors';

const defaultElementStyle = {
  color: TEXT_ON_SECONDARY,
  fontSize: 30,
  textAlignVertical: 'center',
};

export default StyleSheet.create({
  balanceContainer: {
    flexDirection: 'row',
  },
  balanceIcon: {
    ...defaultElementStyle,
    paddingRight: 5,
  },
  balanceIconNegative: {
    color: '#691E06',
  },
  balanceIconPositive: {
    color: '#2c5530',
  },
  balanceIconZero: {
    color: '#33658a',
  },
  balanceText: {
    ...defaultElementStyle,
    paddingLeft: 5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rank: {
    ...defaultElementStyle,
  },
  rankBronze: {
    color: '#563635',
  },
  rankGold: {
    color: '#ffd046',
  },
  rankSilver: {
    color: '#6e675f',
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  scoreIcon: {
    ...defaultElementStyle,
    paddingRight: 5,
  },
  scoreValue: {
    ...defaultElementStyle,
    paddingLeft: 5,
  },
});
