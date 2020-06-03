import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import CreditCard from "./components/CreditCard";
import CreditCardForm from "./components/CreditCardForm";
// import useContext from "./useContext";

function App() {
  // const {
  //   cardNum,
  //   cardName,
  //   cardCVV,
  //   getExpYears,
  //   transformCardNum,
  //   validateUserInput,
  //   handleSubmit,
  // } = useContext();

  // const context = {
  //   cardNum,
  //   cardName,
  //   cardCVV,
  //   getExpYears,
  //   transformCardNum,
  //   validateUserInput,
  //   handleSubmit,
  // };

  return (
    <div className='App'>
      {/* <CreditCard /> */}
      <CreditCardForm />
    </div>
  );
}

export default App;
