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
    const { fetchRanking } = this.props;
    fetchRanking();
  }

  render() {
    const { fetching } = this.props;

    if (fetching) {
      return <Loading />;
    }

    const { lastGameDate, ranking } = this.props;

    return (
      <View style={style.container}>
        <RankingLastGame date={lastGameDate} />
        <RankingList data={ranking} />
      </View>
    );
  }
}

RankingScreen.propTypes = {
  fetching: PropTypes.bool.isRequired,
  fetchRanking: PropTypes.func.isRequired,
  lastGameDate: PropTypes.instanceOf(Date).isRequired,
  /* eslint-disable react/require-default-props */
  ranking: RankingList.propTypes.data,
};

export default RankingScreen;
