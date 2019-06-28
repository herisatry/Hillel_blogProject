/* eslint-disable no-underscore-dangle */
// /* eslint-disable no-underscore-dangle */
// import EventEmitter from 'events';

import { createStore } from 'redux';

import blogreducer from '../reducers/blogreducer';


const myBlogStore = createStore(blogreducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default myBlogStore;
