import {createAsyncThunk, createSlice, type PayloadAction} from "@reduxjs/toolkit";
import {getAllPeople} from "../../api/people.ts";
import type { PeopleResponse, PeopleState } from "./types.ts";


const initialState: PeopleState = {
    persons: [],
    loading: false,
    error: null,
    active: null
}

export const fetchPeople = createAsyncThunk(
    'people/fetchPeople',
    async (_, { rejectWithValue }) => {
        try {
            const response = await getAllPeople();
            console.log(response);
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
        setActive: (state, action: PayloadAction<string>) => {
            state.active = action.payload;
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
                    entityId: person.entityId,
                    id: person.id,
                    name: person.name,
                    heightCm: person.heightCm,
                    massKg: person.massKg,
                    birthYearBBY: person.birthYearBBY,
                    gender: person.gender,
                    homeworld: person.homeworld,
                    films: person.films,
                    species: person.species,
                    vehicles: person.vehicles,
                    starships: person.starships,
                    meta: person.meta
                }));
                state.active = state.persons[0].id;
            })
            .addCase(fetchPeople.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const { setActive } = peopleSlice.actions;
export default peopleSlice.reducer;
