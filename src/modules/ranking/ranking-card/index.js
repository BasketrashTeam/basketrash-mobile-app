import React from 'react';
import { Card, Divider } from 'react-native-elements';

import PlayerIdentification from './player-identification';
import PlayerStatistics from './player-statistics';
import style from './style';

const RankingCard = (props) => {
  const {
    avatarSource,
    balance,
    firstName,
    lastName,
    rank,
    score,
  } = props;

  return (
    <Card containerStyle={style.cardContainer}>
      <PlayerIdentification avatarSource={avatarSource} firstName={firstName} lastName={lastName} />
      <Divider style={style.divider} />
      <PlayerStatistics balance={balance} rank={rank} score={score} />
    </Card>
  );
};

RankingCard.propTypes = {
  ...PlayerIdentification.propTypes,
  ...PlayerStatistics.propTypes,
};

RankingCard.defaultProps = {
  ...PlayerIdentification.defaultProps,
  ...PlayerStatistics.defaultProps,
};

export default RankingCard;
