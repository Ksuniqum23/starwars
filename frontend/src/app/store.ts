import {configureStore} from "@reduxjs/toolkit";
import peopleReducer from "../features/people/peopleSlice.ts"

export const store = configureStore({
    reducer: {
        people: peopleReducer,
    },
});

// типы для типизации хуков React Redux (опционально, но полезно)
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
