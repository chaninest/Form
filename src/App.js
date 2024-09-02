import './App.css';
import { useState } from 'react'

function App() {
const [input1, setInputData] = useState('');
  const [displayData, setDisplayData] = useState('');

  const Firstname1 = (event) => {
    setInputData(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setDisplayData(input1);
  };
  return (
   <div className="container">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlfor="firstname">Name</label>
        <input value={input1} onChange={Firstname1}type="text" placeholder="Enter First-Last Name"></input>

        <label htmlfor="birthday">Birthday</label>
        <input type="date" name="birthday"></input>

        <label htmlfor="age">Age</label>
        <input type= "number" min="0" max="60"></input>

        <label htmlfor="gender">Gender</label>
        <input type="radio" name="gender"/> Male
        <input type="radio" name="gender"/> Female
        <input type="radio" name="gender"/> Other

        <label htmlfor="interests">interests</label>
        <input type="checkbox" name="favorite"/> Movie
        <input type="checkbox" name="favorite"/> Book
        <input type="checkbox" name="favorite"/> Game

        <label htmlfor="resume">Resume</label>
        <input type="file" name="resume" placeholder="Select Resume"></input>

        <button type="button">Reset</button>
        <button type="submit">Submit</button>

      </form>
      {displayData && (
          <div class="infor">
            <h3>information</h3>
            <p>{displayData}</p>
          </div>
        )}
      
   </div>
  );
}

export default App;
