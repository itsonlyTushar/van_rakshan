import { combineReducers, configureStore } from "@reduxjs/toolkit";
import joinTeamReducer from '../features/teamSlice';


const reducers = combineReducers({
    teamSlice : joinTeamReducer
})

export const store = configureStore({
    devTools: true,
    reducer: reducers,
})