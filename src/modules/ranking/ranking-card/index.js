import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';
import {
  Avatar,
  Card,
  Divider,
  Text,
} from 'react-native-elements';

import style from './style';

const RankingCard = (props) => {
  const { avatarSource, firstName, lastName } = props;

  return (
    <Card containerStyle={style.cardContainer}>
      <View style={style.playerContainer}>
        {/* What to do when the avatar cannot load? (Like there is no internet connection) */}
        <Avatar width={128} source={avatarSource} />
        <View style={style.nameGroup}>
          <Text numberOfLines={1} style={style.firstName}>
            {firstName}
          </Text>
          <Text numberOfLines={1} style={style.lastName}>
            {lastName}
          </Text>
        </View>
      </View>
      <Divider style={style.divider} />
      {/* The rank of the player. It must be special for 1st, 2nd and 3rd */}
      {/* How many points the player has */}
      {/* Statistics about the player position from last game */}
    </Card>
  );
};

RankingCard.propTypes = {
  avatarSource: Image.propTypes.source,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

RankingCard.defaultProps = {
  // TODO: Change the default avatar to a image stored in the project
  avatarSource: { uri: 'https://cdn.pixabay.com/photo/2017/02/26/07/54/basketball-2099656_960_720.jpg' },
};

export default RankingCard;
