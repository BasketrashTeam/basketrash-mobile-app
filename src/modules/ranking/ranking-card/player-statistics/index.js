import PropTypes from 'prop-types';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

import style from './style';

// ============================================================
// RANK
// ============================================================

const Rank = ({ rank }) => {
  // First place
  if (rank === 1) {
    return <Icon name="trophy" style={{ ...style.rank, ...style.rankGold }} />;
  }

  // Second place
  if (rank === 2) {
    return <Icon name="medal" style={{ ...style.rank, ...style.rankSilver }} />;
  }

  // Third place
  if (rank === 3) {
    return <Icon name="medal" style={{ ...style.rank, ...style.rankBronze }} />;
  }

  return (
    <Text style={style.rank}>
      {rank}
    </Text>
  );
};

Rank.propTypes = {
  rank: PropTypes.number.isRequired,
};

// ============================================================
// SCORE
// ============================================================

const Score = ({ score }) => (
  <View style={style.scoreContainer}>
    <Icon name="basketball-ball" style={style.scoreIcon} />
    <Text style={style.scoreValue}>
      {score}
    </Text>
  </View>
);

Score.propTypes = {
  score: PropTypes.number,
};

Score.defaultProps = {
  score: 0,
};

// ============================================================
// PLAYER STATISTICS
// ============================================================

const PlayerStatistics = ({ rank, score }) => (
  <View style={style.container}>
    <Rank rank={rank} />
    <Score score={score} />
    {/* Statistics about the player position from last game */}
  </View>
);

PlayerStatistics.propTypes = {
  ...Rank.propTypes,
  ...Score.propTypes,
};

PlayerStatistics.defaultProps = {
  ...Score.defaultProps,
};

export default PlayerStatistics;
