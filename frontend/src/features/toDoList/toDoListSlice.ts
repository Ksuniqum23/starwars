import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

interface TodoState {
    tasks: {
        ids: number[];           // порядок
        entities: Record<number, Task>;  // данные
    };
    loading: boolean;
}

const initialState: TodoState = {
    tasks: {
        ids: [],
        entities: {},
    },
    loading: false,
}

const toDoListSlice = createSlice({
    name: 'toDoList',
    initialState,
    reducers: {
        addNewTask: (state, action: PayloadAction<string>) => {
            const newTask: Task = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };
            state.tasks.ids.push(newTask.id);
            state.tasks.entities[newTask.id] = newTask;
        },

        removeTask: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            delete state.tasks.entities[id];
            state.tasks.ids = state.tasks.ids.filter((taskId) => taskId !== id);
        },

        toggleTask: (state, action: PayloadAction<number>) => {
            const id = action.payload;
            state.tasks.entities[id].completed = !state.tasks.entities[id].completed;
        }
    }
})

export const { addNewTask, removeTask, toggleTask } = toDoListSlice.actions;
export default toDoListSlice.reducer;
