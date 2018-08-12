import React from 'react';
import { Card, Divider } from 'react-native-elements';

import PlayerIdentification from './player-identification';
import style from './style';

const RankingCard = (props) => {
  const { avatarSource, firstName, lastName } = props;

  return (
    <Card containerStyle={style.cardContainer}>
      <PlayerIdentification avatarSource={avatarSource} firstName={firstName} lastName={lastName} />
      <Divider style={style.divider} />
      {/* The rank of the player. It must be special for 1st, 2nd and 3rd */}
      {/* How many points the player has */}
      {/* Statistics about the player position from last game */}
    </Card>
  );
};

RankingCard.propTypes = PlayerIdentification.propTypes;

RankingCard.defaultProps = PlayerIdentification.defaultProps;

export default RankingCard;
