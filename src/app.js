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

const expenseOne = store.dispatch(addExpense({description: "Water bill", amount: 333500, createdAt: 312312310 }));
const expenseTwo = store.dispatch(addExpense({description: "Gas bill", amount: 200, createdAt: 1000}));
const expenseThree = store.dispatch(addExpense({description: "Rent", amount: 3, createdAt: 20000 }));

//store.dispatch(setTextFilter('bill'));

let state = store.getState();

const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);


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