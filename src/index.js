import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { ChakraProvider } from '@chakra-ui/react';

const store = createStore(reducers);

ReactDOM.render(
    <ChakraProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ChakraProvider>, 
    document.querySelector('#root')
);