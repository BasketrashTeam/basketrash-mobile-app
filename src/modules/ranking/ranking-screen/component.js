import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { SECONDARY } from '../../../constants/colors';
import RankingLastGame from '../ranking-last-game';
import RankingList from '../ranking-list';
import style from './style';

const Loading = () => (
  <View style={style.loadingContainer}>
    <ActivityIndicator size="large" color={SECONDARY} />
  </View>
);

class RankingScreen extends PureComponent {
  componentDidMount() {
    const { fetchRank } = this.props;
    fetchRank();
  }

  render() {
    const { fetching } = this.props;

    if (fetching) {
      return <Loading />;
    }

    const { lastGameDate, rank } = this.props;

    return (
      <View style={style.container}>
        <RankingLastGame date={lastGameDate} />
        <RankingList data={rank} />
      </View>
    );
  }
}

RankingScreen.propTypes = {
  fetching: PropTypes.bool.isRequired,
  fetchRank: PropTypes.func.isRequired,
  lastGameDate: PropTypes.instanceOf(Date).isRequired,
  /* eslint-disable react/require-default-props */
  rank: RankingList.propTypes.data,
};

export default RankingScreen;
