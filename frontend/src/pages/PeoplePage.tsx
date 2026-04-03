import PeopleList from "../features/people/PeopleList.tsx";
import {useNavigate, useParams} from "react-router-dom";
import PeopleCard from "../features/people/PeopleCard.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../app/store.ts";
import '../features/people/peoplePage.css';

const PeoplePage = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { persons } = useSelector((state: RootState) => state.people);
    const activePerson = id ? persons[id] : null;
    return (
        <div className="container">
            <h2>People</h2>
            <div className="row">
                <PeopleList activePerson={activePerson} />
                <PeopleCard person={activePerson} />
            </div>

            <button onClick={() => {
                navigate('/');
            }}>
                Back
            </button>
        </div>

    );
};

export default PeoplePage;
