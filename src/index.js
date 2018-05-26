import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';
import configureStore from './redux/configureStore';

import Home from './components/Home/Home';

const store = configureStore();
const App = () => (
    <MuiThemeProvider>
        <Provider store={store}>
            <Home />
        </Provider>
    </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
