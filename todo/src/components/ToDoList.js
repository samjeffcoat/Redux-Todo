import React from 'react';
import { connect } from 'react-redux';

import {addToDo} from "../actions/actions";

class ToDoList extends React.Component {
    state= {
        newTodo: []
    }
    render(){
        return(
            <>
            <h2>Add your Todos here!</h2>
            <div>
            <input
            type= "text"
            value= {this.state.newTodo}
            onChange= {this.handleChanges}
            />
            <button onClick= {this.addToDo}>Add Todo!</button>
            </div>
            </>
        )
    }
}
const mapStateToProps= state=> ({
    todos: state.todos
})

export default connect(mapStateToProps, {addToDo})(ToDoList);