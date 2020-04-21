//import 
import React from 'react';
import ReactDOM from 'react-dom';
create a react component
const App = () => {
    return (
        <div>
            <label className="label" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={{backgroundColor:'blue',color:'white'}}>Submit</button>
        </div>
    );
};
//render it
ReactDOM.render(
    <App/>,document.querySelector('#root')
);
