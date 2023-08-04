import { createStore, combineReducers } from 'redux';
import activeTableReducer from './reducers/activeTableReducer';
// import archivedTableReducer from './reducers/archivedTableReducer';

const rootReducer = combineReducers({
  activeTable: activeTableReducer,
  // archiveTable: archivedTableReducer,
  // statistic: statisticReduce
});

const store = createStore(rootReducer);

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;