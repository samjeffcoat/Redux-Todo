import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(rootReducer);


function App(){
    return (
        <div className= "App">
        <h1>Sam's Todo App</h1>
        </div>
    )
}


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


