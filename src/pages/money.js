import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';
import BalanceCard from './money/balance-card';
import BudgetInput from './money/budgetInput';
import BillCalendar from './money/calendar/bill-calendar';
import LoansWindow from './money/loans-window/loans-window';
import SideMenu from './money/side-menu/side-menu';
import UpcomingPayments from './money/upcoming-payments';

const BALANCE_THEME = {
    RED: { outterBg: 'bg-red-300', innerBg: 'bg-red-400', textColor: 'text-red-800', chartLineColor: '#d42f2f'},
    YELLOW: { outterBg: 'bg-yellow-400', innerBg: 'bg-yellow-500', textColor: 'text-yellow-800', chartLineColor: '#c95710'},        
    GREEN:{ outterBg: 'bg-green-300', innerBg: 'bg-green-400', textColor: 'text-green-800', chartLineColor: '#08a81b'},
    BLUE: { outterBg:'bg-blue-300', innerBg: 'bg-blue-400', textColor:'text-blue-800', chartLineColor: '#8884d8'},
    GRAY: { outterBg:'bg-gray-300', innerBg: 'bg-gray-400', textColor:'text-gray-800', chartLineColor: '#8884d8'},
}

const BALANCE_CARDS = [
    {title:'CHECKING', balance: '0.00', color: BALANCE_THEME.RED}, 
    {title: 'SAVINGS', balance: '0.00', color:BALANCE_THEME.YELLOW},
    {title:'STOCKS', balance: '0.00', color:BALANCE_THEME.GREEN},
    {title:'CRYPTO', balance: '0.00', color:BALANCE_THEME.BLUE},
    // {title:'OPTIONS', balance: '0.00', color:BALANCE_THEME.GRAY},
]

const CREDIT_CARD_ICONS = [
    { VISA: <a href="https://www.flaticon.com/free-icons/visa" title="visa icons"/>},
    { MASTERCARD: <a target="_blank" href="https://icons8.com/icon/62765/mastercard-logo"/> },
    { DISCOVER: <a href="https://www.flaticon.com/free-icons/discover" title="discover icons"/> },

]

const Money = () => {

    // const [ actualBalance, setActualBalance ] = useState(0);
    // const [ displayBalance, setDisplayBalance ] = useState('');

    const formatBalanceAmount = (amount) => {
        const formatter = (new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }));
        console.log('outgoing amount: ', formatter.format(amount));
        // setDisplayBalance(formatter.format(amount));
    }

    const balanceCards = [];
    const budgetInputs = [];

    const graphData = [
        { date: '09/17', happyRate: 5.50, CHECKING: 400, SAVINGS: 200, STOCKS:400, CRYPTO:700 },
        { date: '09/18', happyRate: 5.45, CHECKING: 450, SAVINGS: 225, STOCKS:433, CRYPTO:200 },
        { date: '09/16', happyRate: 29.25, CHECKING: 900, SAVINGS: 300, STOCKS:478, CRYPTO:275 },
        { date: '09/19', happyRate: 2.50, CHECKING: 600, SAVINGS: 400, STOCKS:700, CRYPTO:350 }
    ];

    BALANCE_CARDS.map(item => {
        console.log('item', item);
        // formatBalanceAmount(item.displayBalance);
        balanceCards.push(
            <div className="flex flex-col p-2">
                <BalanceCard key={`${item.title}-card`} displayBalance={item.balance} title={item.title} colorTheme={item.color}/>
            </div>
        );
        budgetInputs.push(<BudgetInput key={`${item.title}-input`} title={item.title}/>);
    });


    return(
        <div className="flex flex-row h-screen">
            
            <div className="flex flex-col h-screen">
                <SideMenu />
            </div>

            <div className="flex flex-col h-screen w-full items-center pt-5 overflow-y-auto">
                <div className="flex flex-row mb-3">
                    <div className="flex flex-col justify-evenly max-w-sm mr-3">
                        <BillCalendar/>
                    </div>
                    <div className="flex flex-col shadow-md">
                        <LineChart width={600} height={300} data={graphData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <XAxis dataKey="date"/>
                            <YAxis />
                            <Tooltip/>
                            <Line type="linear" dataKey="CHECKING" stroke={BALANCE_THEME.RED.chartLineColor} />
                            <Line type="linear" dataKey="SAVINGS" stroke={BALANCE_THEME.YELLOW.chartLineColor} />
                            <Line type="linear" dataKey="STOCKS" stroke={BALANCE_THEME.GREEN.chartLineColor} />
                            <Line type="linear" dataKey="CRYPTO" stroke={BALANCE_THEME.BLUE.chartLineColor} />
                        </LineChart>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full px-4 my-4">
                    <div className="flex flex-wrap justify-center bg-gray-100 my-3 py-2 w-full rounded-md shadow-md">
                        { balanceCards }
                    </div>
                </div>
                <div className="flex flex-col w-full px-4 rounded-md">
                    <UpcomingPayments/>
                </div>
            </div>

            <div className="flex flex-col flex-wrap h-screen w-1/4">
                <LoansWindow budgetInputs={budgetInputs}/>
            </div>
        
        </div>
    );
}
export default Money;