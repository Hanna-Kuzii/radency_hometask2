import { createStore, combineReducers } from 'redux';
import notesDataReducer from './reducers/notesDataReducer';
import { statisticsReducer } from './reducers/statisticReducer';

const rootReducer = combineReducers({
  notesData: notesDataReducer,
  statistic: statisticsReducer
});


const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;