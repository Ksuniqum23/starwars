import type {AppDispatch, RootState} from "../../app/store.ts";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {fetchPeople} from "./peopleSlice.ts";
import type {Person} from "./types.ts";


const PeopleList = ({ activePerson }: { activePerson: Person | null }) => {
    const { persons, loading, error, order } = useSelector((state: RootState) => state.people);
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        if (order.length === 0 && !loading) {
            dispatch(fetchPeople());
        }
    }, [order.length, loading, error]);
    const navigate = useNavigate();
    console.log('peopleList loading - active person = ', activePerson);
    return (
        <div className="list-group">
            {loading &&
                <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '5vh' }}>
                    <Spinner animation="border" variant="warning" />
                </div>
            }
            {error && <div>Error: {error}</div>}
            {order.length > 0 && order.map((personID) => {
                const person = persons[personID];
                return (
                    <a href="#"
                       key={person.id}
                       className={`list-group-item list-group-item-action ${activePerson?.id ===  personID ? "active" : ""}`}
                       onClick={(e) => {
                           e.preventDefault();
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
