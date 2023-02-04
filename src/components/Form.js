import { useState } from "react";
import ShowStudent from "./ShowStudent";

const Form = (props) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState();
  const [country, setCountry] = useState("");

  const Student = { name, gender, age, country };

  const HandleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="container-fluid">
        <h5>Add a student</h5>
        <form onSubmit={HandleSubmit}>
          <label>Student Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Student Gender</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option hidden disabled selected value>
              Select a Gender:
            </option>

            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <br></br>
          <label>Student Age</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Student Country</label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          />
          <br></br>
          <button>Add Student</button>
        </form>
      </div>
      <ShowStudent
        name={Student.name}
        gender={Student.gender}
        age={Student.age}
        country={Student.country}
      />
    </div>
  );
};

export default Form;
