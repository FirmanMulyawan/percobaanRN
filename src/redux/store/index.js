import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import reducers from '../reducers';
const loggerMiddleware = createLogger({
  predicate: (getState, action) => __DEV__,
});
function configureStore(initState) {
  const enchancer = compose(applyMiddleware(thunk, loggerMiddleware));
  // const enchancer = compose(applyMiddleware(thunkMiddleware))
  return createStore(reducers, initState, enchancer);
}
// export default createStore(reducers, applyMiddleware(thunk));
const store = configureStore({});

export default store;
