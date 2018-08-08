import React from 'react';
import { Image } from 'react-native';
import { Avatar, Card } from 'react-native-elements';

import style from './style';

const RankingCard = (props) => {
  const { avatarSource } = props;

  return (
    <Card containerStyle={style.cardContainer}>
      <Avatar width={128} source={avatarSource} />
      {/* The first and last name of the player. The first name should be bigger and on top of last name */}
      {/* A divider separating the player identifier from its statistics */}
      {/* The rank of the player. It must be special for 1st, 2nd and 3rd */}
      {/* How many points the player has */}
      {/* Statistics about the player position from last game, last week and last month */}
    </Card>
  );
};

RankingCard.propTypes = {
  avatarSource: Image.propTypes.source,
};

RankingCard.defaultProps = {
  // TODO: Change the default avatar to a image stored in the project
  avatarSource: { uri: 'https://cdn.pixabay.com/photo/2017/02/26/07/54/basketball-2099656_960_720.jpg' },
};

export default RankingCard;
