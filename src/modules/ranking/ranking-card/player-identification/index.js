import PropTypes from 'prop-types';
import React from 'react';
import { Image, View } from 'react-native';
import { Avatar, Text } from 'react-native-elements';

import style from './style';

const PlayerIdentification = (props) => {
  const { avatarSource, firstName, lastName } = props;

  return (
    <View style={style.container}>
      <Avatar width={64} source={avatarSource} />
      <View style={style.nameGroup}>
        <Text numberOfLines={1} style={style.firstName}>
          {firstName}
        </Text>
        <Text numberOfLines={1} style={style.lastName}>
          {lastName}
        </Text>
      </View>
    </View>
  );
};

PlayerIdentification.propTypes = {
  avatarSource: Image.propTypes.source,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
};

PlayerIdentification.defaultProps = {
  // TODO: Change the default avatar to a image stored in the project
  avatarSource: { uri: 'https://cdn.pixabay.com/photo/2017/02/26/07/54/basketball-2099656_960_720.jpg' },
};

export default PlayerIdentification;
