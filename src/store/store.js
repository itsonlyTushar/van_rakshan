import { combineReducers, configureStore } from "@reduxjs/toolkit";
import joinTeamReducer from '../features/teamSlice';
import { apiReducer } from "../features/apiSlice";


const reducers = combineReducers({
    teamSlice : joinTeamReducer,
    apiReducer: apiReducer,
})

export const store = configureStore({
    devTools: true,
    reducer: reducers,
})