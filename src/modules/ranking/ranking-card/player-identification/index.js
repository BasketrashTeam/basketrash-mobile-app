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
  /* eslint-disable global-require */
  avatarSource: require('../../../../assets/images/profile-64x90.png'),
};

export default PlayerIdentification;
