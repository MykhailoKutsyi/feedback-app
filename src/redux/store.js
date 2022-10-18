import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sessionReducer from './session/session-slice';

const sessionPersistConfig = {
  key: 'session',
  storage,
};
const rootReducer = combineReducers({
  session: persistReducer(sessionPersistConfig, sessionReducer),
});

export const store = configureStore({
  reducer: rootReducer,

  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
