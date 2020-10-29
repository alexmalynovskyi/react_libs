import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['authType'] // which reducer want to store
  }
  const pReducer = persistReducer(persistConfig, rootReducer);
  const middleware = applyMiddleware(thunk);
  const store = createStore(pReducer, middleware);
  const persistor = persistStore(store);
  export { persistor, store };