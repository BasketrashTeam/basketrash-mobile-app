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
// PLAYER STATISTICS
// ============================================================

const PlayerStatistics = (props) => {
  const { rank } = props;

  return (
    <View style={style.container}>
      <Rank rank={rank} />
      {/* How many points the player has */}
      {/* Statistics about the player position from last game */}
    </View>
  );
};

PlayerStatistics.propTypes = Rank.propTypes;

export default PlayerStatistics;
