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
    color: '#691e06',
  },
  balanceIconPositive: {
    color: '#566e3d',
  },
  balanceIconZero: {
    color: '#0c4767',
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
    color: '#965a38',
  },
  rankGold: {
    color: '#c98910',
  },
  rankSilver: {
    color: '#a8a8a8',
  },
  scoreContainer: {
    flexDirection: 'row',
  },
  scoreIcon: {
    ...defaultElementStyle,
    color: '#cc7300',
    paddingRight: 5,
  },
  scoreValue: {
    ...defaultElementStyle,
    paddingLeft: 5,
  },
});
