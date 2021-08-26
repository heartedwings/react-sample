import { ADDTODO, DELETETODO } from '../actions';


const initialState = []


export const todos = ( state = initialState, action ) => {
    switch ( action.type ) {
        case ADDTODO:
            return [...state, action.text ]
        case DELETETODO:
                // todoList: state.todoList.filter( (todoList) => 
                //     todoList.index !== action.text
                const newTodos = [...state];
                newTodos.splice(action.index, 1);
                return newTodos;
            
        default:
            return state;
    }
}


export default todos;