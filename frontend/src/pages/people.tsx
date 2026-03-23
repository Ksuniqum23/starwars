import {useDispatch, useSelector} from "react-redux";
import type {AppDispatch, RootState} from "../app/store.ts";
import {fetchPeople} from "../features/people/peopleSlice.ts";

const People = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { persons, loading, error } = useSelector((state: RootState) => state.people);


    return (
        <div className="container">
            <button onClick={() => dispatch(fetchPeople())}>
                Fetch People
            </button>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            <div>
                <h3>People List:</h3>
                {persons.length > 0 && (
                    <ul style={{ marginTop: '20px' }}>
                        {persons.map((person) => (
                            <li key={person.id}>{person.name}</li>
                        ))}
                    </ul>
                )}

                {/* JSON для отладки */}
                {persons.length > 0 && (
                    <details style={{ marginTop: '20px' }}>
                        <summary>Show JSON</summary>
                        <pre>{JSON.stringify(persons, null, 2)}</pre>
                    </details>
                )}
            </div>
        </div>

    );
};

export default People;
