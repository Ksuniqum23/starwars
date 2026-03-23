import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAllPeople} from "../../api/people.ts";

interface Person {
    id: string;
    name: string;
}

interface PeopleState {
    persons: Person[];
    loading: boolean;
    error: string | null;
}

// Тип для ответа API
interface PeopleResponse {
    page: number;
    limit: number;
    total: number;
    pages: number;
    results: {
        id: string;
        name: string;
        // остальные поля есть, но мы их не используем
        [key: string]: any;
    }[];
}

const initialState: PeopleState = {
    persons: [],
    loading: false,
    error: null,
}

export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllPeople();
            return response.data as PeopleResponse;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const peopleSlice = createSlice({
    name: 'people',
    initialState,
    reducers: {
        clearPeople:  (state) => {
            state.persons = [];
            state.error = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPeople.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPeople.fulfilled, (state, action: PayloadAction<PeopleResponse>) => {
                state.loading = false;
                state.persons = action.payload.results.map(person => ({
                    id: person.id,
                    name: person.name
                }));
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { clearPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
