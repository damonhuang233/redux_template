import { connect } from "react-redux";
import { useState, useEffect } from "react";
import uuid from 'react-uuid';

import { addExampleAction, deleteLastNumberAction } from "./Redux/actions";

function App(props) {
  const [numbers, setNumbers] = useState([]);
  const [numToAdd, setNumToAdd] = useState(0);

  useEffect(()=> {
    setNumbers(props.number);
  }, [props.number]);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addNumber(numToAdd);
    setNumToAdd(0);
  }

  const handleChange =(e) => {
    setNumToAdd(e.target.value);
  } 

  return (
   <>
    <form onSubmit={handleSubmit}>
      <p>Enter Number To Add:</p>
      <input type="number" value={numToAdd} onChange={handleChange}/>
      <button type="submit"> Submit </button>
    </form>
    <button onClick={props.deleteLast}>Delete last number</button>
    <div>
      {numbers.map((num) => (<p key={uuid()}> {num} </p>))}
    </div>
   </>
  );
}

//optional second paramter ownprops
const mapStateToProps = (state) => {
  return {
    number: state.number
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addNumber: (number)=> dispatch(addExampleAction(number)),
    deleteLast: ()=> dispatch(deleteLastNumberAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
