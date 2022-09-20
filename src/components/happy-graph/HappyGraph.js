import React from 'react';
import Chart from '../../features/chart';

const HappyGraph = () => {
	const data = [
    {name: '09/16', happyMeter: 2},
    {name: '09/17', happyMeter: 3},
    {name: '09/18', happyMeter: 5},
    {name: '09/19', happyMeter: 2},
    {name: '09/20', happyMeter: 3}
  ];

    return(
			<div className="w-full rounded bg-gray-900 text-white">
				<div className="flex m-2 justify-center items-center rounded text-center p-3 shadow-lg cursor-pointer">
					<Chart data={data} lineColor="#0ced39"/>
				</div>
			</div>
    );
}
export default HappyGraph