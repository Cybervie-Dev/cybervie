// import { addDoc, collection, getDocs } from "firebase/firestore";
// import { db } from "../config/firebaseConfig";

export const OPEN_CLOSE_REGISTRATION = "OPEN_CLOSE_REGISTRATION";
export const SET_USERS_DATA = "SET_USERS_DATA";
export const SWITCH_TAB = "SWITCH_TAB";
export const LOAD_CONTENT = "LOAD_CONTENT";
export const UPDATE_URL = "UPDATE_URL";
export const UPDATE_SEARCH_VALUE = "UPDATE_SEARCH_VALUE";
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS";
export const OPEN_SNACKBAR_NOTIFICATION='OPEN_SNACKBAR_NOTIFICATION';
export const CLOSE_SNACKBAR_NOTIFICATION= 'CLOSE_SNACKBAR_NOTIFICATION'

export const openCloseRegistration = (payload) => ({
  type: OPEN_CLOSE_REGISTRATION,
  payload: payload,
});

export const setUserData = (payload) => ({
  type: SET_USERS_DATA,
  payload: payload,
});

export const openSnackBarNotification = (payload) => ({
  type: OPEN_SNACKBAR_NOTIFICATION,
  payload: payload,
});

export const closeSnackBarNotification = () => ({
  type: CLOSE_SNACKBAR_NOTIFICATION,
  payload: false,
});


