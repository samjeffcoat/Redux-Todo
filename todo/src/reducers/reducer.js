import { ADD_TODO} from "../actions/actions";

const initialState= {
    todos: [{todo: "clean house", done: false}, {todo: "put up groceries", done: true}]
};

function reducer (state = initialState, action){
    switch(action.type){
        case ADD_TODO:
        return{
            ...state,
            todo: action.payload
        };
        default: 
        return state;
    }
}

export default reducer;