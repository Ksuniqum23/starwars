import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.ts"
import listReducer from "../features/toDoList/toDoListSlice.ts"
import peopleReducer from "../features/people/peopleSlice.ts"

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        toDoList: listReducer,
        people: peopleReducer,
    },
});

// типы для типизации хуков React Redux (опционально, но полезно)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
