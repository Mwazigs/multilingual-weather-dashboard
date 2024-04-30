import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {thunk} from "redux-thunk"; // Import redux-thunk for async actions
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducers";

// Function to save state to local storage
function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.error("Error saving state to local storage:", e);
  }
}

// Function to load state from local storage
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    console.error("Error loading state from local storage:", e);
    return undefined;
  }
}

const persistedState = loadFromLocalStorage();

// Create store using configureStore from @reduxjs/toolkit
const store = configureStore({
  reducer: rootReducer,
  preloadedState: persistedState,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== "production", // Enable devtools in non-production environment
});

// Subscribe to store changes to save state to local storage
store.subscribe(() => saveToLocalStorage(store.getState()));

export default store;
