import React from 'react';
import { Link } from 'react-router-dom';

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => (
    <div>
        <Link to = {`/edit/${id}`}>
            <p>{description}</p>
        </Link>
        <p>{amount} - {createdAt}</p>
    </div>
)

export default ExpenseListItem;