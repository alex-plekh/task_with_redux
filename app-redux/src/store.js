import { createStore } from 'redux';

import { getUserReducer } from './reducers/reducer';

export const store = createStore(getUserReducer);