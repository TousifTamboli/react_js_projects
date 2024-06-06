import React, { useState } from "react";

const FormProjectNew = () => {
  const [fullname, setFullName] = useState({
    fname: "",
    lname: "",
    mail: "",
    phone: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setFullName((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (fullname.fname && fullname.lname) {
      alert(`Form submitted by ${fullname.fname} ${fullname.lname}`);
    } else if (!fullname.fname) {
      alert("First name is required");
    } else if (!fullname.lname) {
      alert("Last name is required");
    }
  };
  return (
    <>
      <div className="container">
        <form onSubmit={onSubmit}>
          <h1>
            Hello {fullname.fname} {fullname.lname} {fullname.mail}{" "}
            {fullname.phone}
          </h1>
          <input
            className="form-input"
            type="text"
            name="fname"
            placeholder="Enter Your First Name"
            onChange={inputEvent}
            value={fullname.fname}
          />
          <input
            className="form-input"
            type="text"
            name="lname"
            placeholder="Enter Your Last Name"
            onChange={inputEvent}
            value={fullname.lname}
          />
          <input
            className="form-input"
            type="email"
            name="mail"
            placeholder="Enter Your Email ID"
            onChange={inputEvent}
            value={fullname.mail}
          />
          <input
            className="form-input"
            type="number"
            name="phone"
            placeholder="Enter Your Phone number"
            onChange={inputEvent}
            value={fullname.phone}
          />
          <button type="submit">Click Me</button>
        </form>
      </div>
    </>
  );
};

export default FormProjectNew;
