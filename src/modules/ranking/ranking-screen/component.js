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
    const { fetch } = this.props;
    fetch();
  }

  render() {
    const { fetching } = this.props;

    if (fetching) {
      return <Loading />;
    }

    const { lastGameDateExists } = this.props;

    return (
      <View style={style.container}>
        {lastGameDateExists && <RankingLastGame />}
        <RankingList />
      </View>
    );
  }
}

RankingScreen.propTypes = {
  fetch: PropTypes.func.isRequired,
  fetching: PropTypes.bool.isRequired,
  lastGameDateExists: PropTypes.bool.isRequired,
};

export default RankingScreen;
