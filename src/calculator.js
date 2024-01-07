import React from 'react';

import './calculator.css';

class Calculator extends React.Component{

  constructor(props) {

   super(props);

   this.state = {

     displayValue: "", // Initialize the display value

   };

 }

 // handlingButton 

 handleButtonClick = (value) => {

  if (value === "=") {

    // Handle the calculation

    this.calculateResult();

  } else if (value === "c") {

    // Clear the display

    this.clearDisplay();

  } else {

    // Update the display with the clicked button value

    this.setState((prevState) => ({

      displayValue: prevState.displayValue + value,

    }));

  }

};

// calculating value

calculateResult = () => {

  try {



  

    // eslint-disable-next-line no-eval
    const result = eval(this.state.displayValue);

    this.setState({ displayValue: result });

  } catch (error) {

    this.setState({ displayValue: "Error" });

  }

};

clearDisplay = () => {

  this.setState({ displayValue: "",

 });

}; 

 render() {

    return (

      <>

   <h1>Calculator</h1>

      <div className="calculator">

        <div className="display">{this.state.displayValue}</div>

        <div className="buttons">

          <button onClick={() => this.handleButtonClick('7')}>7</button>

          <button onClick={() => this.handleButtonClick('8')}>8</button>

          <button onClick={() => this.handleButtonClick('9')}>9</button>

          <button onClick={() => this.handleButtonClick('/')}className='symbol'>/</button>



         <button onClick={() => this.handleButtonClick('4')}>4</button>

          <button onClick={() => this.handleButtonClick('5')}>5</button>

          <button onClick={() => this.handleButtonClick('6')}>6</button>

          <button onClick={() => this.handleButtonClick('*')} className='symbol'>*</button>



          <button onClick={() => this.handleButtonClick('1')}>1</button>

          <button onClick={() => this.handleButtonClick('2')}>2</button>

          <button onClick={() => this.handleButtonClick('3')}>3</button>

          <button onClick={() => this.handleButtonClick('-')} className='symbol'>-</button>



          <button onClick={() => this.handleButtonClick('0')}>0</button>

          <button onClick={() => this.handleButtonClick('.')}>.</button>

          <button onClick={this.clearDisplay} className='ClearButton'>C</button>

          <button onClick={() => this.handleButtonClick('+')}className='symbol'>+</button>



          <button onClick={() => this.handleButtonClick('=')} className="equals">

            =

          </button>

        </div>

      </div>

      </>

    );

  }

}



export default Calculator;

