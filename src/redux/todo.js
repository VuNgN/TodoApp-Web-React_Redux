const ADD_TODO = "ADD_TODO";
const REMOVE_TODO = "REMOVE_TODO";

const initTodoState = {
  items: []
};

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id: id
});

const reducer = (state = initTodoState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: `${state.items.length + 1}`,
            content: action.payload
          }
        ]
      };
    case REMOVE_TODO:
      return {
        ...state,
        items: [...state.items.filter((todo) => todo.id !== action.id)]
      };
    default:
      return state;
  }
};

export default reducer;
