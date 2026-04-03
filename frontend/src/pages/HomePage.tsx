import { useDispatch} from "react-redux";
import type {AppDispatch} from "../app/store.ts";
import {fetchPeople} from "../features/people/peopleSlice.ts";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    return (
        <div className="container">
            <button onClick={() => {
                navigate('/people');
            }}>
                Fetch People
            </button>
        </div>


    );
};

export default HomePage;
