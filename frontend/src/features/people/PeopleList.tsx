import type {AppDispatch, RootState} from "../../app/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import {setActive} from "./peopleSlice.ts";
import {useNavigate} from "react-router-dom";


const PeopleList = () => {
    const { persons, loading, error, active } = useSelector((state: RootState) => state.people);
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    return (
        <div className="list-group">
            <h2>People</h2>
            {loading &&
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '5vh' }}>
                    <Spinner animation="border" variant="warning" />
                </div>
            }
            {error && <div>Error: {error}</div>}
            {persons.length > 0 && persons.map((person) => {
                return (
                    <a href="#"
                       key={person.id}
                       className={`list-group-item list-group-item-action ${active ===  person.id ? "active" : ""}`}
                       onClick={(e) => {
                           e.preventDefault();
                           dispatch(setActive(person.id));
                           navigate('/people/' + person.id);
                       }}
                    >
                        {person.name}
                    </a>
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
