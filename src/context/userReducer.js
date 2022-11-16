export default function userReducer(state, action) {
  switch (action.type) {
    // signup
    case "SIGN_UP_REQUEST":
      return { ...state, user: null, loading: true, error: null };
    case "SIGN_UP_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "SIGN_UP_UPDATE":
      return {
        ...state,
        user: { ...state.user, displayName: action.payload },
        loading: false,
        error: null,
      };
    case "SIGN_UP_FAILURE":
      return { ...state, user: null, loading: false, error: action.payload };

    //   login
    case "LOGIN_REQUEST":
      return { ...state, user: null, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { ...state, user: action.payload, loading: false, error: null };
    case "LOGIN_FAILURE":
      return { ...state, user: null, loading: false, error: action.payload };

    case "SIGN_OUT":
      return { ...state, user: null, loading: false, error: null };

    case "LOAD_USER":
      return { ...state, user: action.payload, loading: false, error: null };
    default:
      return state;
  }
}
