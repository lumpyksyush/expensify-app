import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

const ExpenseSummary = ({ expenseCount, expenseTotal}) => {
    return (
        <div>
            <p>You are viewing {expenseCount} {expenseCount === 1 ? 'expense' : 'expenses'} totalling {numeral(expenseTotal / 100).format('$0,0.00')} </p>
        </div>
    );
};

const mapStateToProps = (state) => {
    const visibleExpenses = selectExpenses(state.expenses, state.filters);

    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: selectExpensesTotal(visibleExpenses)
    };
};

export default connect(mapStateToProps)(ExpenseSummary);