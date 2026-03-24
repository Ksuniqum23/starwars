import type { RootState} from "../../app/store.ts";
import { useSelector} from "react-redux";

const PeopleList = () => {
    const { persons, loading, error } = useSelector((state: RootState) => state.people);

    return (
        <div className="list-group">
            <h2>LIST!!!</h2>
            {loading && <div>Loading...</div>}
            {error && <div>Error: {error}</div>}
            {persons.length > 0 && persons.map((person) => {
                return (
                    <a href="#" key={person.id} className="list-group-item list-group-item-action">{person.name}</a>
                )
            })}
        </div>
    )
}

export default PeopleList;

//
// <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
//     The current link item
// </a>
// <a href="#" className="list-group-item list-group-item-action">A second link item</a>
// <a href="#" className="list-group-item list-group-item-action">A third link item</a>
// <a href="#" className="list-group-item list-group-item-action">A fourth link item</a>
// <a href="#" className="list-group-item list-group-item-action disabled" aria-disabled="true">A disabled link
//     item</a>
