import React from 'react';

const UpcomingPayments = () => {
  let rows = [];
  const DATA = [
     { billTitle: 'COMED', balance:'$75.83', dueDate:"Sep 18" },
     { billTitle: 'AWS SERVICES', balance:'$23.17', dueDate:"Sep 19"},
     { billTitle: 'ANYTIME FITNESS', balance:'$52.91', dueDate:"Sep 20" }
  ]
  const TOTAL = { billTitle: 'TOTAL', balance:'$0.00', dueDate:"" }
  const totalRow = 
  ( 
    <div className="flex flex-row justify-center items-center bg-green-100 my-1 py-1 w-full rounded-sm shadow-md">
      <div className="flex flex-row w-2/5">
        <div className="flex flex-col w-1/2 text-gray-900">
          {TOTAL.dueDate}
        </div>
        <div className="flex flex-col w-full">
          <div className="flex font-bold">{TOTAL.billTitle}</div>
        </div>
        <div className="flex flex-col w-full items-end">
          <div className="flex">{TOTAL.balance}</div>  
        </div>
      </div>
    </div>
  );

  DATA.map(item => {
    rows.push(
      <div className="flex flex-row justify-center items-center bg-white my-1 py-1 w-full rounded-sm shadow-md">
        <div className="flex flex-row w-2/5">
          <div className="flex flex-col w-1/2 text-gray-900">
            {item.dueDate}
          </div>
          <div className="flex flex-col w-full">
            <div className="flex font-bold">{item.billTitle}</div>
          </div>
          <div className="flex flex-col w-full items-end">
            <div className="flex">{item.balance}</div>  
          </div>
        </div>
      </div>
    );
  });
  

  return(
    <div className="flex flex-col w-full justify-center my-3 rounded-t-md bg-gray-100 shadow-md">
      <div className="flex flex-col w-full text-center h-full rounded-t-md text-center">
        <div className="flex flex-col w-full text-2xl font-bold tracking-wider items-center my-3">
          <div className="flex">UPCOMING PAYMENTS { new Date().getMonth().toFixed("%m") }</div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center text-lg my-3 p-5">
        { rows }
        { totalRow }
      </div>
    </div>
  );
}
export default UpcomingPayments;