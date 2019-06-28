import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import myBlogStore from './store/store';
import App from './components/container/App';

ReactDOM.render(
<Provider store={myBlogStore}>
    <App />
</Provider>,
    document.querySelector('#root'),
    );
