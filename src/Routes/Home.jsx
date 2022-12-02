import React from "react";
import Title from "../Components/Title";
import homeImg from "../assests/main-gym.png";
import App from "../App";
import { BsPlayFill } from "react-icons/bs";
import { useState, useEffect } from "react";

function Home() {
  const [workTime, setWorkTime] = useState(0);
  const [disable, setDisable] = useState(false);
  const [workoutDiff, setWorkoutDiff] = useState();

  
  useEffect(() =>{
    if ( workTime === 0) {
      setWorkoutDiff("Set your difficulty");
    } 
    if ( workTime >= 10 ) {
      setWorkoutDiff("Easy");
    } 
    if ( workTime >= 15 ) {
      setWorkoutDiff("Medium");
    } 
    if( workTime >= 20) {
      setWorkoutDiff("Difficult");
    } 
    if(workTime > 25){
      setWorkoutDiff("Getting Bigger Bro!")
    }
  });

  function incTime() {
    setWorkTime(workTime + 1);
  }

  function decTime() {
    setWorkTime(workTime - 1);
  }

  return (
    <>
   
      <div className="text-start my-3 ms-4">
        <Title title="Welcome to Sculpt"/>
      </div>

      <main className="card row text-left text-white m-4 p-2 bg-success bg-gradient rounded-5">
        <div className="col text-start">
          <h1>Start your daily training</h1>
          <p>with your own gym bro!</p>
          <div className="card bg-warning d-flex flex-row justify-content-between p-2 rounded-4">
            <div className="text-end">
              <button
                disabled={false}
                className="btn btn-light btn-sm rounded-3"
                onClick={function () {
                  decTime();
                  setDisable();
                }}
              >
                -
              </button>
              {/* <Button  classes={"light btn-sm"} text={"-"}/> */}
              <span style={{ margin: "0.5em" }}>{workTime} Min</span>
              <button
                className="btn btn-light btn-sm rounded-3"
                onClick={() => incTime()}
              >
                +
              </button>
            </div>
            <h5>{workoutDiff}</h5>
          </div>
        </div>
        <div className="col">
          <img src={homeImg} alt="home img" style={{ maxWidth: "400px" }}></img>
        </div>
        <a href="/" className="text-center">
          <button className="btn btn-dark p-2 my-2 rounded-pill">
            <BsPlayFill className="fs-2 me-1" />
            Get Started
          </button>
        </a>
      </main>
    </>
  );
}

export default Home;
