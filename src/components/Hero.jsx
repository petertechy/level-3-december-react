import React, { useState } from "react";

const Hero = () => {
  const [myName, setmyName] = useState("Daniel");
  const [myAge, setmyAge] = useState(0);
  // let myName = "David"
  // let myAge = 20

  const arrayOfStudents = [
    {
      id: 1,
      name: "Daniel",
      age: 20,
      gender: "male",
      address: {
        street: "Agbeloba",
        city: "Abeokuta",
        state: "Ogun State",
      },
    },
    {
      id: 2,
      name: "Michael",
      age: 24,
      gender: "male",
      address: {
        street: "Landerin",
        city: "Abeokuta",
        state: "Ogun State",
      },
    },
    {
      id: 3,
      name: "David",
      age: 29,
      gender: "male",
      address: {
        street: "Under Bridge, Kuto",
        city: "Abeokuta",
        state: "Ogun State",
      },
    },
    {
      id: 4,
      name: "Moses",
      age: 49,
      gender: "male",
      address: {
        street: "Olomore",
        city: "Abeokuta",
        state: "Ogun State",
      },
    },
  ];

  const handleClick = () => {
    console.log("Ihave been clicked");
    setmyName("Moses");
    setmyAge(myAge + 1);
    console.log(myName);
    console.log(myAge);
  };
  return (
    <div className="rounded-3 mx-auto col-7 p-4 my-5 shadow-lg text-center">
      <h1>My name is: {myName}</h1>
      <h2>My Age is: {myAge}</h2>
      <button onClick={handleClick} className="btn btn-danger">
        Increase Age
      </button>

      <table className="table table-bordered">
        <thead>
          <tr>
            <td>S/N</td>
            <td>Name</td>
            <td>Age</td>
            <td>Gender</td>
            <td>Address</td>
          </tr>
        </thead>

        <tbody>
          {arrayOfStudents.map((student, index) => (
            <tr key={index}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.gender}</td>
              <td>
                {student.address.street}, {student.address.city},{" "}
                {student.address.state}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hero;
