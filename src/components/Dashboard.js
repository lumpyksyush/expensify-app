import React from 'react';
import ConnectedExpenseSummary from './ExpenseSummary';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div>
        <ConnectedExpenseSummary />
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export default ExpenseDashboardPage;