import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info} {props.info2}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthed && <WrappedComponent {...props} />}
        </div>
    )
}

//const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentification(Info);

//ReactDOM.render(<AdminInfo isAdmin = {false} info = "Here are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthed = {true} info = "Welcome back" info2 = "Nice to see you again" />, document.getElementById('app'));