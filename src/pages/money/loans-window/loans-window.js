import React from 'react';

const LoansWindow = ({budgetInputs}) => {
  let creditCardList = [];
  const CREDIT_CARDS = [
    { iconSource: 'https://img.icons8.com/color/48/000000/visa.png', balance: '0.00' },
    { iconSource: 'https://img.icons8.com/color/48/000000/mastercard-logo.png', balance: '0.00' },
    { iconSource: 'https://img.icons8.com/color/48/000000/discover.png', balance: '0.00' }
  ]
  CREDIT_CARDS.map(item => {
    creditCardList.push(
      <div className="flex flex-row justify-between">
        <div className="flex">
          <img src={item.iconSource} />
        </div>
        <div className="flex self-center">
          <div>$ {item.balance}</div>
        </div>
      </div>
    );
  });

  return (
    <div className="h-screen bg-black p-3 overflow-y-auto">
      <div className="flex flex-col mb-3">
        <div className="flex flex-col text-white text-center mb-2">
          <p className="text-2xl">LOANS</p>
        </div>
        <div className="flex flex-col px-3 bg-gray-900 text-white">
          <div className="flex flex-row justify-between">
            <div className="flex">
              <div className="pl-8">STUDENT LOANS</div>
            </div>
            <div className="flex flex-col content-end">
              <div className="flex">$ 0.00</div>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex">
              <div className="pl-8">PRIVATE LOANS</div>
            </div>
            <div className="flex flex-col content-end">
              <div className="flex">$ 0.00</div>
            </div>
          </div>
          <hr />
          <div className="flex flex-row justify-between pl-8 mt-3">
            <div className="flex">
              <div>TOTAL</div>
            </div>
            <div className="flex flex-col content-end">
              <div className="flex">$ 0.00</div>
            </div>
          </div>
          <hr />
          <hr />
        </div>
      </div>
      <div className="flex flex-col content-center text-white text-center mb-3">
        <p className="text-2xl mb-2">CREDIT CARDS</p>
        <div className="flex flex-col content-start px-3 bg-gray-900">
          { creditCardList }
          <hr />
          <div className="flex flex-row justify-between mt-3">
            <div>TOTAL</div>
            <div>$ 0.00</div>
          </div>
        </div>
        <hr />
        <hr />
      </div>
      <div className="flex flex-col flex-wrap">
        <div className="flex flex-col text-white text-center">
          <p className="text-2xl mb-2">BUDGET</p>
        </div>
        <div className="flex flex-col px-3 bg-gray-900">
          { budgetInputs }
        </div>
      </div>
    </div>
  );
}
export default LoansWindow;