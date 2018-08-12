import { StyleSheet } from 'react-native';

const defaultElementStyle = {
  fontSize: 30,
  textAlignVertical: 'center',
};

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  rank: {
    ...defaultElementStyle,
  },
  rankBronze: {
    color: '#965A38',
  },
  rankGold: {
    color: '#C98910',
  },
  rankSilver: {
    color: '#A8A8A8',
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
