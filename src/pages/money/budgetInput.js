import React from 'react';

const BudgetInput = ({ title }) => {
  const onClick = () => {
    console.log('clicky poo');
  }
  return (
    <div className="flex flex-row justify-between text-sm my-2">
      <div className="flex flex-col text-white self-center mx-1">
        <label htmlFor={`${title}-input`}>{title}: </label>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-col mr-2">
            <input type="text" name={`${title}-input`} placeholder="$0.00" className="p-1 w-32" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <div className="flex flex-col bg-green-500 w-5 rounded-sm mr-2 font-extrabold text-center text-green-200" onClick={() => { onClick() }}>+</div>
              <div className="flex flex-col bg-red-500 w-5 rounded-sm font-extrabold text-center text-red-200" onClick={() => { onClick() }}>-</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BudgetInput;