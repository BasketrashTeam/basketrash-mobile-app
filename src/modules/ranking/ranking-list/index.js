import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';

import RankingCard from '../ranking-card';
import style from './style';

const RankingList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={item => `${item.firstName} ${item.lastName}`}
    // TODO: ListEmptyComponent
    renderItem={({ item, index }) => (
      <RankingCard
        {...item}
        cardContainerStyle={index === data.length - 1 ? style.lastElement : undefined}
      />
    )}
  />
);

RankingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(RankingCard.propTypes)).isRequired,
};

export default RankingList;
