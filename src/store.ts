import { createStore, applyMiddleware } from "redux";
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import modules from './modules';
import rootSata from './saga';

const configureStore = () => {
  const logger = createLogger();
  const sagaMiddleWare = createSagaMiddleware();
  const store = createStore(
    modules, 
    applyMiddleware(logger, sagaMiddleWare)
  );
  sagaMiddleWare.run(rootSata);
  return store;
}

export default configureStore();