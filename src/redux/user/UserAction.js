import axios from "axios";

import { FETCH_USERS_REQUEST } from "./UserTypes";

import { FETCH_USERS_SUCCESS } from "./UserTypes";

import { FETCH_USERS_ERROR } from "./UserTypes";

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,

    payload: users,
  };
};

const fetchUsersError = (error) => {
  return {
    type: FETCH_USERS_ERROR,

    payload: error,
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);

    axios

      .get("https://jsonplaceholder.typicode.com/users")

      .then((response) => {
        const users = response.data;

        dispatch(fetchUsersSuccess(users));
      })

      .catch((error) => {
        const errorMessage = error.message;

        dispatch(fetchUsersError(errorMessage));
      });
  };
};
