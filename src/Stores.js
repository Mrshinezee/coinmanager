import { Platform } from 'react-native';
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux';
import devTools from 'remote-redux-devtools';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { persistCombineReducers, persistStore } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import RootReducer from './Reducers';
const config = {
    debug: true,
    key: 'root',
    stateReconciler: autoMergeLevel2,
    storage,
    timeout: 10000,
  };
const persistedReducers = persistCombineReducers(config, RootReducer);
const middleware = applyMiddleware(thunk, promise, logger);

const configureStore = () => {
const store = createStore(
    persistedReducers,
    compose(middleware,
        devTools({
            name: Platform.OS,
            hostname: 'localhost',
            port: 5678
        }),
    )
);
const persistor = persistStore(store);
  return { persistor, store };
};

export default configureStore;
