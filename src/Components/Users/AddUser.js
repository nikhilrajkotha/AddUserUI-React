import React, { useState,useRef } from "react";
import Card from "../UI/Card";
import "./AddUser.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";
function AddUser(props) {

    const nameInpurRef = useRef();
    const ageInputRef = useRef();

//   const [enteredUserName, setEnteredUserName] = useState("");
//   const [enteredAge, setEnteredAge] = useState("");
    const[error,setError] = useState('');
  const addUserHandler = (event) => {
    event.preventDefault();
    const emteredName = nameInpurRef.current.value;
    const enteredUserAge = ageInputRef.current.value;
    if(emteredName.trim().length===0 || enteredUserAge.trim().length===0) {
        setError({
            title:"Invalid Input",
            message:'Please enter a valid name and age(non - empty values)'
        })
        return;
    }
    if(+enteredUserAge < 1) {
        setError({
            title:"Invalid Input",
            message:'Please enter valid age(greater than zero)'
        })
        return;
    }

    props.onAddUser(emteredName, enteredUserAge);
    //we shoudnt generally use ref to manipulate dom as we do here, do this only if needed
    
    nameInpurRef.current.value= '';
    ageInputRef.current.value = '';
    // setEnteredUserName("");
    // setEnteredAge("");
  };

//   const usernameChangeHandler = (event) => {
//     setEnteredUserName(event.target.value);
//   };

//   const ageChangeHandler = (event) => {
//     setEnteredAge(event.target.value);
//   };
  const errorhandler = () => {
      setError(null);
  }

  return (
      <Wrapper>
    {error && <ErrorModal title={error.title} message={error.message} onConfirm ={errorhandler}></ErrorModal>}
    <Card>
      <form onSubmit={addUserHandler} className="input">
        <label htmlFor="username">UserName</label>
        <input
          type="text"
          id="username"
        //   value={enteredUserName}
        //   onChange={usernameChangeHandler}
          ref={nameInpurRef}
        ></input>
        <label htmlFor="age">Age(Years)</label>
        <input
          type="number"
          id="age"
        //   value={enteredAge}
        //   onChange={ageChangeHandler}
          ref={ageInputRef}
        ></input>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </Wrapper>
  );
}

export default AddUser;
