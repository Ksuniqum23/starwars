import PeopleList from "../features/people/PeopleList.tsx";
import {useNavigate} from "react-router-dom";

const PeoplePage = () => {
    const navigate = useNavigate();
    return (
        <div className="container">
           <PeopleList />
            <button onClick={() => {
                navigate('/');
            }}>
                Back
            </button>
        </div>

    );
};

export default PeoplePage;
