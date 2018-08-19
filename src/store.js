import { init } from '@rematch/core';

import rankingModel from './modules/ranking/model';

const store = init({
  models: {
    ranking: rankingModel,
  },
});

export default store;
