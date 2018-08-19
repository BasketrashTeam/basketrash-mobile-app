// TODO: Internationalize moment
import 'moment/locale/pt-br';
import React from 'react';
import { Provider } from 'react-redux';

import Navigator from './navigator';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);

export default App;
