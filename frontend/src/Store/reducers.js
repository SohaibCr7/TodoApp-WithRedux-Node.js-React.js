import { CREATE_TODO, REMOVE_TODO, Is_Login } from "./actions";

export const todos = (state = {
    data: [],
    isUserLoggedIn: false,
    progress: false,
}, action) => {

    const { type, payload } = action;

    switch (type) {
        case CREATE_TODO: {
            const { text } = payload;

            const newTodo = {
                text,
                isCompleted: false,
            };
            return {
                ...state,
                data: state.data.concat(newTodo)
            }
            //return state.concat(newTodo);
        }

        case Is_Login: {
            return {
                ...state,
                isUserLoggedIn: true
            }
        }

        case REMOVE_TODO: {
            const { text } = payload;
            return {
                ...state,
                data: state.data.filter(todo => todo.text != text)
            }
            //state.filter(todo => todo.text !== text);
        }

        default:
            return state;
    }
}