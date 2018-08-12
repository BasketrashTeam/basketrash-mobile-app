import PropTypes from 'prop-types';
import React from 'react';
import { FlatList } from 'react-native';

import RankingCard from '../ranking-card';

const RankingList = ({ data }) => (
  <FlatList
    data={data}
    keyExtractor={item => `${item.firstName} ${item.lastName}`}
    // TODO: ListEmptyComponent
    renderItem={({ item }) => <RankingCard {...item} />}
  />
);

RankingList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape(RankingCard.propTypes)).isRequired,
};

export default RankingList;
