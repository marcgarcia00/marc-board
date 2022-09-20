import React, { useEffect, useState } from 'react'
import BalanceCardLegend from './balance-card-legend';

const BalanceCard = ({displayBalance, title, colorTheme}) => {
  const [theme, setTheme] = useState({ outterBg:'bg-gray-300', innerBg: 'bg-gray-400', textColor:'text-gray-800'});

  useEffect(()=> {
      setTheme(colorTheme)
  },[colorTheme]);

  const BALANCE_TEXT_COLOR = {
    RED: 'text-red-300',
    GREEN: 'text-green-300',
    GRAY: 'text-gray-400'
  }

  const BALANCE_CARD_LEGEND = [
    {title:'BUDGET', balance: '0.00', color: BALANCE_TEXT_COLOR.GRAY},
    {title:'CURRENT', balance: '0.00', color: BALANCE_TEXT_COLOR.GREEN}
  ]

  let balanceLegends = [];
  BALANCE_CARD_LEGEND.map(item => {
    balanceLegends.push(
      <BalanceCardLegend key={item.title} title={item.title} balance={item.balance} color={item.color}/>
    );
  });

    return (
      <div className="flex flex-col rounded">
        <div className={`flex flex-col justify-center h-52 w-52 rounded md:max-w-xl p-2 ${theme.outterBg} sm:{w-48}`}>
          <div className="flex justify-center mb-1">
            <p className="font-bold text-xl">{title}</p>
          </div>
          <div className={`flex justify-center items-center h-full ${theme.innerBg}`}>
              <p className={`text-4xl ${theme.textColor}`}>$ {displayBalance}</p>
          </div>
        </div>
        <div className="flex flex-col py-3 px-2 justify-end">
          {balanceLegends}
        </div>
      </div>
    );
}
export default BalanceCard;