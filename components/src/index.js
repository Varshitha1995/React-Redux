import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () =>{
    return (
        <div className="ui container comments">
            <ApprovalCard>
            <CommentDetail author="Sam" time="2PM" content="Nice post!" avatar={faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
            <CommentDetail author="Alex" time="8PM" content="Very funny" avatar={faker.image.avatar()} />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'))