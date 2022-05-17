import {
  FETCH_USERS_ERROR,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
} from "./UserTypes";

const initialState = {
  loading: false,

  users: [],

  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,

        loading: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        ...state,

        users: action.payload,

        error: "",
      };

    case FETCH_USERS_ERROR:
      return {
        ...state,

        users: [],

        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
