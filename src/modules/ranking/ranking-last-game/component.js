import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, View } from 'react-native';

import style from './style';

const RankingLastGame = ({ date }) => (
  <View style={style.container}>
    <Text style={style.text}>
      {/* TODO: Internationalize the messages */}
      Último jogo:
      {moment(date).format('L')}
    </Text>
  </View>
);

RankingLastGame.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
};

export default RankingLastGame;
