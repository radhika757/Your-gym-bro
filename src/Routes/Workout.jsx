import Title from "../Components/Title";
import {MdWorkspaces} from "react-icons/md";
import WorkoutPlan from "../Components/WorkoutPlan";
import { useState } from "react";

function Workout() {
  const getInitialDay = () => {
    const value = "Tuesday";
    return value;
  };

  const[value, setValue] = useState(getInitialDay);

  const handleChange = (e) =>{
setValue(e.target.value);
  };
  return (
    <div>
      <div className="ms-3 m-3 text-center">
        <Title title="Select your workout" />
      </div>
     <div className="row justify-content-center">
      <select className="col-md-6  btn btn-secondary  dropdown-toggle ps-1 rounded-pill" value={value} onChange={handleChange}>
        <option>Select a week</option>
        <option value="Monday">Monday</option>
        <option value="Tuesday">Tuesday</option>
        <option value="Wednesday">Wednesday</option>
        <option value="Thursday">Thursday</option>
        <option value="Friday">Friday</option>
        <option value="Saturday">Saturday</option>
        <option value="Sunday">Sunday</option>
        </select>
     
      <p className="col-md-4 ps-4 m-2"><MdWorkspaces/> {value}</p>
      </div>
    <WorkoutPlan />
   
    </div>
  );
}

export default Workout;
