import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
  EnhancedStore,
} from '@reduxjs/toolkit'

import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  WebStorage,
} from 'redux-persist'
import createWebStorage from 'redux-persist/es/storage/createWebStorage'
import {WorkScheduleSlice} from './index';


const createNoopStorage = () => {
  return {
    getItem(_key:number) {
      return Promise.resolve(null)
    },
    setItem(_key:number, value:object) {
      return Promise.resolve(value)
    },
    removeItem(_key:number) {
      return Promise.resolve()
    },
  }
}

typeof window !== 'undefined'
? createWebStorage('local')
: createNoopStorage()

const rootReducer = combineReducers({
  workSchedule: WorkScheduleSlice.reducer,
});

export type RootState = ReturnType<typeof rootReducer>

const storage = typeof window !== "undefined" ? createWebStorage("local") : createNoopStorage();

const persistConfig = {
  key: 'p-next-work-schedule',
  version: 1,
  storage:localStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const UseStore = (): EnhancedStore => {
  return configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  })
}


export default UseStore;