export default function dataReducer(state, action) {
  switch (action.type) {
    case "CREATE_DATA":
      return [...state, action.payload];
    case "SET_DATA":
      return [...action.payload];
    case "DELETE_DATA":
      const newState = state.filter((item) => item.id !== action.payload);
      return [...newState];
    case "UPDATE_DATA":
      return [...state];
    case "CLEAR_DATA":
      return [];
    default:
      return state;
  }
}
