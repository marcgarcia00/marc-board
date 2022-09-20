import React from 'react';

const TherapyNotes = () => {
  return(
    <div className="flex flex-col w-full h-screen items-center bg-gray-100">
      <div className="flex flex-row justify-center">
        <label htmlFor="notes">Notes: </label>
        <div className="flex flex-col">
          <input type="text" name="notes" className="mx-1 p-1 rounded"/>
        </div>
      </div>
      <div className="flex flex-col bg-gray-100 h-screen w-full items-center">
        <div className="flex w-1/2">
          <div>Test</div>
        </div>
      </div>
    </div>
  );
}
export default TherapyNotes;