import { createStackNavigator } from 'react-navigation';

import RankingScreen from './modules/ranking/ranking-screen';
import style from './style';

export default createStackNavigator({
  Ranking: {
    screen: RankingScreen,
    navigationOptions: () => ({
      title: 'Ranking',
      headerTitleStyle: style.headerTitle,
      headerTitleContainerStyle: style.headerTitleContainer,
    }),
  },
});
