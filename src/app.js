import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import "./styles/styles.scss";

const store = configureStore();

// const App = () => (
//     <Provider store = {store}>
//         <AppRouter />
//     </Provider>
// );

const Jsx = (
    <Provider store = {store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(Jsx, document.getElementById('app'));