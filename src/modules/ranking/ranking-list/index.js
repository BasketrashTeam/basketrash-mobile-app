import PropTypes from 'prop-types';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

import RankingCard from '../ranking-card';
import style from './style';

const EmptyRanking = () => (
  <View style={style.emptyRankingContainer}>
    <Text style={style.emptyRankingText}>
      {/* TODO: Internationalize the messages */}
      Não há pontos registrados
    </Text>
  </View>
);

const RankingList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={item => `${item.firstName} ${item.lastName}`}
    ListEmptyComponent={EmptyRanking}
    renderItem={({ item, index }) => {
      const getCardContainerStyle = () => {
        let cardContainerStyle = {};

        if (index === 0) {
          cardContainerStyle = { ...cardContainerStyle, ...style.firstElement };
        }

        if (index === data.length - 1) {
          cardContainerStyle = { ...cardContainerStyle, ...style.lastElement };
        }

        return cardContainerStyle;
      };

      return (
        <RankingCard
          {...item}
          cardContainerStyle={getCardContainerStyle()}
        />
      );
    }}
  />
);

RankingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(RankingCard.propTypes)).isRequired,
};

export default RankingList;
