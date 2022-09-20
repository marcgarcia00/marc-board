import React from 'react';

const BalanceCardLegend = ({title, balance, color}) => {
  return(
    <div className="flex flex-col">
      <div className="flex flex-row items-center space-x-2">
        <div className="flex">
          <p className="text-lg font-bold">{title}:</p>
        </div>
        <div className="flex">
          <p className={`text-md ${color}`}>$ {balance}</p>
        </div>
      </div>
    </div>
  );
}
export default BalanceCardLegend